import React from "react";
import troll from "./../troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={troll} className="header--image" alt="error" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">By Usaid Aijaz</h4>
    </header>
  );
}
