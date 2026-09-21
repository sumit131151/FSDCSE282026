// const container = document.getElementById("root");
// console.log(container);
// const root = ReactDOM.createRoot(container);
// const h2 = React.createElement(
//   "h2",
//   { style: { color: "purple" } },
//   "Welcome to React",
// );
// const h1 = React.createElement(
//   "h1",
//   { style: { color: "brown", backgroundColor: "lightgray" } },
//   "abes",
// );

// const img = React.createElement("img", {
//   src: "https://tse3.mm.bing.net/th/id/OIP.mMKwxHLPp6UXawIFdo7mkwHaEE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//   height: 200,
//   width: 300,
// });
// const div = React.createElement("div",{style:{border:"1px solid black",height:"auto",width: '350px'}}, null, h1, h2, img);

// root.render(div);
const container = document.getElementById("root");

console.log(container);

const root = ReactDOM.createRoot(container);

const h1 = React.createElement(
  "h1",
  {
    style: {
      color: "brown",
      backgroundColor: "lightgray",
    },
  },
  "ABES Engineering College",
);

const h2 = React.createElement(
  "h2",
  {
    style: {
      color: "purple",
    },
  },
  "Sumit Kumar",
);

const p1 = React.createElement("p", null, "Class: B.Tech CSE");

const p2 = React.createElement("p", null, "Section: 28");

const img = React.createElement("img", {
  src: "https://tse3.mm.bing.net/th/id/OIP.mMKwxHLPp6UXawIFdo7mkwHaEE?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  height: 200,
  width: 300,
});

const div = React.createElement(
  "div",
  {
    style: {
      border: "1px solid black",
      height: "auto",
      width: "350px",
      padding: "10px",
    },
  },
  h1,
  h2,
  p1,
  p2,
  img,
);

root.render(div);

