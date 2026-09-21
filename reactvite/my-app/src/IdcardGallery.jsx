import React from "react";
import ICard from "./ICard";

import sumit from "./images/sumit.jpg";
import rahul from "./images/rahul.jpg";
import aman from "./images/aman.jpg";

function IdcardGallery() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        backgroundColor: "#111",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <ICard roll="34365" name="Sumit Kumar" branch="CSE" photo={sumit} />

      <ICard roll="34366" name="Rahul" branch="CSE" photo={rahul} />

      <ICard roll="34367" name="Aman" branch="CSE" photo={aman} />
    </div>
  );
}

export default IdcardGallery;
