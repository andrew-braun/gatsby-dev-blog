import React from "react"
import headerStyles from "../styles/header.module.css"
import Nav from "../components/nav";

export default function Header(props) {
    return (
        <header className="mainHeader">
            <Nav />
            <h1>{props.headerText}</h1>
        </header>
    )
}

