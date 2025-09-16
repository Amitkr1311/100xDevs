import express from "express";
import mongoose from "mongoose"
import Jwt from "jsonwebtoken"
import { JWT_PASSWORD } from "./jwt_password.js";
import {LinkModel, userModel} from "./db.js";
import { ContentModel } from "./db.js";
import { userMiddleware } from "./middleware.js";
import z from "zod";
import bcrypt from "bcrypt";
import { random } from "./random.js";


const app = express();
app.use(express.json());

const port = 3000;



app.post("/api/v1/signup", async (req, res) => {
    // Todo -> zod the username and password
    // input validation 
    const required_body = z.object({
    username: z.string().min(3, "Username must be at least 3 chars"),
    password: z.string().superRefine((val, ctx) => {
    if (val.length < 8)
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Must be 8+ characters" });
    if (val.length > 30)
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Must be <30 characters" });
    if (!/[A-Z]/.test(val))
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Must include uppercase letter" });
    if (!/[a-z]/.test(val))
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Must include lowercase letter" });
    if (!/[0-9]/.test(val))
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Must include a digit" });
    if (!/[!@#$%^&*().,?<>|]/.test(val))
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Must include a special character" });
  }),
});
    // Parsing the required body.
    const parsedData = required_body.safeParse(req.body);

    if(!parsedData.success){
        res.status(403).json({
            message: "Invalid Password or Username",
            error:parsedData.error
        })
        return
    }

    const username = req.body.username;
    const password = req.body.password;

    // -> hashing the password if error show the error code

    const hashedPwd = await bcrypt.hash(password,5);

    try {
        await userModel.create({
            username: username,
            password: hashedPwd
        })

        res.json({
            message: "user signed up."
        })
    } catch(e) {
        res.status(411).json({
            message: "User exist already"
        })
    }
})


app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const response = await userModel.findOne({
        username,
        //password
    })

    if(!response){
        res.status(403).json({
            message:"user does not exist"
        })
    }

    //@ts-ignore
    const matched_pwd = await bcrypt.compare(password, response.password)

    if(matched_pwd) {
        const token = Jwt.sign({
            //@ts-ignore
            id:response._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    const tags = req.body.tags

    await ContentModel.create({
        title,
        link,
        type,
        // @ts-ignore
        userId: req.userId,
        tags: tags || [],
    })

    res.json({
        message: "Content Added"
    })
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

// app.delete("/api/v1/content", userMiddleware, async (req, res) => {
//     //@ts-ignore
//     const contentId = req.body.contentId;
//     await ContentModel.deleteMany({
//         _id: new mongoose.Types.ObjectId(contentId),
//         //@ts-ignore
//         userId:req.userId
//     })
//     res.json({
//         message:"Deleted"
//     })
// })

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  try {
    const { contentId } = req.body.contentId;

    if (!contentId) {
      return res.status(400).json({ message: "contentId is required" });
    }

    const result = await ContentModel.deleteOne({
      _id: new mongoose.Types.ObjectId(contentId),
      // @ts-ignore
      userId: req.userId,
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Content not found or you are not authorized to delete it",
      });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting content", error: err });
  }
});


app.post("/api/v1/brain/share", userMiddleware, async(req, res) => {
    const share = req.body.share;

    if(share) {
        //@ts-ignore
        const existingLink = await LinkModel.findOne({userId:req.UserId});
        if(existingLink) {
            res.json({
                hash: existingLink.hash
            })
        }
        else{
            const hash = random(10);
            await LinkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: hash
            })
            res.json({
                hash
            })
        }
    }
    else{
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        })
        res.json({
            message: "Removed Link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async(req, res) => {
    const hash = req.params.shareLink

    const link = await LinkModel.findOne({
        hash
    })

    if(!link) {
        res.status(403).json({
            message: "wrong link"
        })
    }

    const content = await ContentModel.findOne({
        //@ts-ignore
        userId: link?.userId
    })

    // if(!content) {
    //     res.json({
    //         message:"content not found"
    //     })
    // }

    const user = await userModel.findOne({
        _id:link?.userId
    })

    if(!user) {
        res.status(403).json({
            message: "user not found"
        })
        return
    }

    res.json({
        username: user.username,
        content: content
    })
})



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
