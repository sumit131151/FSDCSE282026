const root = document.getElementById("container");
const button = document.getElementById("btn");
console.log(button);
console.log(root);

async function getData() {
   // alert("Hello, World!");
   const serverdata= await fetch("https://fakestoreapi.com/products");
   const data= await serverdata.json();
   
   console.log(data);
}
button.addEventListener("click", getData);
