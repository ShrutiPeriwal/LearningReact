import React from "react";
import Logo from "../media/logo.webp";

export default function Header() {
    return (
        <div>
        <header className="header">
            <img src= {Logo} alt="logo" className="header-img" />
            <h2 className="header-title">Meme Generator</h2>
        </header>
        </div>
    )
}