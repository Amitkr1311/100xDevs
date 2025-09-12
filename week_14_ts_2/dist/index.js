"use strict";
// implementing interface...
Object.defineProperty(exports, "__esModule", { value: true });
let e1 = {
    name: "amit",
    startdate: "01-04-2003"
};
let m1 = {
    name: "amit Kumar",
    department: "software"
};
let t1 = {
    name: "amitkr",
    startdate: "20-12-2001",
    department: "communication"
};
function greet(user) {
    console.log("hello " + user.name + '\n'); // if we use age and startDate and department in | it will show error because it is not guarentee that teamLead will include it as name cauz name is in both type
}
greet(t1);
greet(e1);
greet(m1);
//# sourceMappingURL=index.js.map