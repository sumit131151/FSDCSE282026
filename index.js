// console.log("Hello, World!");
// const sum=function sum(a, b) {
//     return a + b;
// }
// sum(5, 10);
// console.log(sum(5, 10));
// // square root of sum
// console.log(Math.sqrt(sum(5, 10)));

// let a = 34;
// if (a > 20){
// let a = 45;
//     console.log("a inside a="+a);
// }
// console.log("a outside a="+a);

// const sum = (a, b) => a + b;    //arrow function
// sum(5, 10);
// console.log(sum(5, 10));

// const sum=(a,b)=>{return Math.sqrt(a+b)};
// console.log(sum(5,10));

// function sum(a, b) {
//     return a + b;
// }

// function sumwitmsg(clbk,jrj) {
//     const result=clk(10, 20);
//     console.log("The sum is "+result+" and the message is "+jrj);
// }
// sumwitmsg(sum,"Hello, World!");

// function login(msg,error){
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log("Message: "+msg);
//     }
// }
// function loginhandler(username,password,clbk){
//     // username="admin";
//     // password="234";
//     if(username==="admin" && password==="234"){
//         clbk("Login Successful",null);
//     }
//     else{
//         clbk(null,"Invalid Credentials");
//     }
// }
// loginhandler("admin","234",login);

// setTimeout(()=>{
//     console.log("Hello, World!");
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//             },3000);
//         },3000);
//     },3000);                
// },3000);


// promise= new Promise((resolve,reject)=>{
//     let a=1+1;
//     if(a==2){
//         resolve("Success");
//     }
//     else{
//         reject("Failed");
//     }
// });
// console.log(promise);

// promise
//   .then((msg) => console.log(msg))
//   .catch((msg) => console.log(msg))
//   .finally(() => {
//     console.log("resource closed");
//   });
    

// async function handlelogin(){
//     const status=promise;
//     console.log(status);
// }
// handlelogin();
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function verifyOTP() {
  const generatedOTP = Math.floor(1000 + Math.random() * 9000);

  console.log("Generated OTP:", generatedOTP);

  const enteredOTP = await askQuestion("Enter OTP: ");

  if (Number(enteredOTP) === generatedOTP) {
    console.log("OTP Verified Successfully");
    return "success";
  } else {
    console.log("Wrong OTP");
    return "failed";
  }
}

async function orderRecieved() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Received");
    }, 1000);
  });
}

async function orderPrepared() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Prepared");
    }, 1000);
  });
}

async function orderCompleted() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Completed Successfully");
    }, 1000);
  });
}

async function handleLogin() {
  const otpStatus = await verifyOTP();

  if (otpStatus === "success") {
    const status1 = await orderRecieved();
    console.log(status1);

    const status2 = await orderPrepared();
    console.log(status2);

    const status3 = await orderCompleted();
    console.log(status3);
  } else {
    console.log("Order Cancelled");
  }

  rl.close();
}

handleLogin();











