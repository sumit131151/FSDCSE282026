import React from "react";

function ICard({ roll, name, branch, photo }) {
  return (
    <div
      style={{
        width: "315px",
        height: "500px",
        border: "5px solid red",
        color: "white",
        backgroundColor: "#15161b",
        textAlign: "center",
        padding: "15px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={photo}
        alt={name}
        style={{
          width: "148px",
          height: "148px",
          objectFit: "cover",
          marginBottom: "5px",
        }}
      />

      <h2 style={{ margin: "5px 0", fontSize: "27px" }}>Roll: {roll}</h2>

      <h2 style={{ margin: "10px 0", fontSize: "27px" }}>Name: {name}</h2>

      <h2 style={{ margin: "10px 0", fontSize: "27px" }}>Branch: {branch}</h2>

      <h2 style={{ margin: "10px 0", fontSize: "27px" }}>
        College: ABES
        <br />
        Engineering College
      </h2>
    </div>
  );
}

export default ICard;
