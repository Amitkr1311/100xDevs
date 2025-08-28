import React from 'react';

function App() {
    return <div>
      <ErrorBoundary>
          <Card1 />
      </ErrorBoundary>
      <ErrorBoundary>
          <Card2 />
      </ErrorBoundary>
    </div>
}

function Card1() {

  throw new Error("Error while re-rendering")
  
    return <div style={{background:"grey", borderRadius: '10px', color:"white", margin:'10px', padding:'20px'}}>
      Hiii....
    </div>
}

function Card2() {
    return <div style={{background:"grey", borderRadius: '10px', color:"white", margin:'10px', padding:'20px'}}>
      Handsome
    </div>
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{background:"grey", borderRadius: '10px', color:"white", margin:'10px', padding:'20px'}}>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

export default App;




















// import { useEffect, useState } from "react";
// import { PostComponent } from "./post";
// import "./App.css";

// function App() {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabdata] = useState({});
//   const [loading , setLoading] = useState(true);

//   useEffect(function() {
//     setLoading(true);
//     // send a Backend request to get the data for this tab
//     fetch("https://json-placeholder.mock.beeceptor.com/users/" + currentTab)
//     .then(async res => {
//       const json = await res.json();
//       console.log(currentTab);
//       console.log(json);
//       setTabdata(json);
//       setLoading(false);
//     });
//   },[currentTab])
    

//   return <div>
//     <button onClick={function() {
//       setCurrentTab(1)
//     }} style={{color: currentTab == 1 ? "red" : "black"}}>todo #1</button>
//     <button onClick={function() {
//       setCurrentTab(2)
//     }} style={{color: currentTab == 2 ? "red" : "black"}}>todo #2</button>
//     <button onClick={function() {
//       setCurrentTab(3)
//     }} style={{color: currentTab == 3 ? "red" : "black"}}>todo #3</button>
//     <button onClick={function() {
//       setCurrentTab(4)
//     }} style={{color: currentTab == 4 ? "red" : "black"}}>todo #4</button>

//     <br />
//     {loading ? "Loading..." :tabData.name}
//   </div>
  
// }

// export default App;

// const [posts, setPosts] = useState([]);

//   const postComponents = posts.map(post => <PostComponent
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.time}
//     image={post.image}
//     description={post.description}
//   />)

//   function AddPost() {
//     setPosts([...posts,{
//       name:"Amit",
//       subtitle:"12187 followers",
//       time:"2m ago",
//       image:"https://lh3.googleusercontent.com/ogw/AF2bZyifwHkz-Fs6JnBrqgLkzSQ1BC6BXXNjk_6IF60-Y1NvVw=s64-c-mo",
//       description:"hello fam!"
//     }])
//   }

//   return (
//     <div style={{background: "#dfe6e9",height:"100vh"}}>
//       <button onClick={AddPost}>Add Post</button>
//       <div style={{display:"flex", justifyContent:"center"}}>
//         <div>
//             {postComponents}
//         </div>
//       </div>
//     </div>
//   )

// return (
//     <div style={{backgroundColor:"#dfe6e9", height:"100vh"}}>
//         <Toggle_Msg />
//         <Toggle_Msg />
//         <Toggle_Msg />
//     </div>

//   )

// const Toggle_Msg = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   function Toggle() {
//     setIsVisible(!isVisible);
//   }

//   return (
//     <div>
//       <button onClick={Toggle}>Toggle Message</button>
//       {!isVisible && <p>The Toggle message is re-rendered</p>}
//     </div>
//   );
// };

{
  /* <div style={{display: "flex",flexDirection:"column", justifyContent: 'center',alignItems:"center",gap: "20px"}}>
        <div>
          <PostComponent/>
        </div>
        <div>
          <PostComponent/>
        </div>
        <div>
          <PostComponent/>
        </div>
      </div> */
}

// const style = {width: 200, backgroundColor: "white",
//               borderRadius: 10, borderColor: "grey",borderWidth:1,padding: 20}
// function PostComponent() {
//   return <div style={style}>
//     <div style={{display:"flex"}}>
//         <img src={"https://lh3.googleusercontent.com/ogw/AF2bZyifwHkz-Fs6JnBrqgLkzSQ1BC6BXXNjk_6IF60-Y1NvVw=s64-c-mo"} style={{width: 35, height: 35, borderRadius:20}} />
//         <div style={{fontSize:10, marginLeft:10}}>
//           <b>
//             Amit Kumar
//         </b>
//         <div>13,443 Followers</div>
//         <div>12 Min</div>
//         </div>
//     </div>
//     <div>
//       Hii family, Myself amit kumar a cse student from iiit raichur.
//       happy to connect to you all.
//     </div>
//   </div>

// }


// useEffect(function() {
//     console.log("mounted");
//     const intervalId = setInterval(increase,1000);
//     console.log("unmounted");

//     return () => clearInterval(intervalId);
//   },[]);


//   function increase() {
//     setCount(count => count + 1);
//   }
//   return (
//     <div>
//       <div style={{ position: "relative", display: "inline-block" }}>
//         {/* Bell Icon */}
//         <img
//           style={{ height: 40, width: 40, cursor: "pointer" }}
//           src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg="
//           alt="Notification Bell"
//         />

//         {/* Notification Badge */}
//         <div
//           style={{
//             position: "absolute",
//             top: -5,
//             right: -5,
//             background: "red",
//             color: "white",
//             borderRadius: "50%",
//             width: 20,
//             height: 20,
//             fontSize: 12,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontWeight: "bold",
//           }}
//         >
//           {count}
//         </div>
//       </div>
//     </div>