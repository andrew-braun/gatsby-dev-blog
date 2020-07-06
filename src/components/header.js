import React from "react";
import headerStyles from "../styles/header.module.css";
import Nav from "../components/nav";

export default function Header(props) {
    return (
        <header className={headerStyles.mainHeader}>
            <Nav />
            <div className={headerStyles.headerContent}>
                <h1> { props.headerText } </h1>
            </div>
        </header>
    )
}

