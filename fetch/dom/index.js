const btn = document.getElementById("btn");
console.log(btn);
const root = document.getElementById("root");
console.log(root);
// const h2 = document.createElement('h2');
const h1 = document.createElement("h1");
// const img=document.createElement('img');
const loader = document.createElement("h2");
loader.innerHTML = "Loading.....";
async function showData() {
  try {
    const serverData = await fetch("https://fakestoreapi.com/products");
    const jsonData = await serverData.json();
    h1.innerHTML = `<h1 style=color:red>${jsonData[0].title}</h1>`;
    // alert("hii");
    // h2.innerHTML="welcome to ABES";
    root.appendChild(loader);
    // h2.innerHTML="welcome to ABES";
    // h2.innerHTML="welcome to DOM Manipulation";
    // root.appendChild(h2);
    // h1.innerHTML="welcome to DOM Manipulation again..."
    root.appendChild(h1);
    // img.src="hello.png";
    // img.setAttribute('height',200);
    // img.setAttribute('width',200);
    // root.appendChild(img);
  } catch (e) {
    console.log(e);
  } finally {
    root.removeChild(loader);
  }
}
btn.addEventListener("click", showData);
