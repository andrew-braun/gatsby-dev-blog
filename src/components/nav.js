import React from "react";
import { Link } from "gatsby";
import navStyles from "../styles/nav.module.css";

export default function Nav () {
    return (
        <nav className={navStyles.headerNav}>
            <Link to="/">Home</Link>
            <Link to="/about/">About </Link>
            <Link to="/contact/">Contact</Link>
        </nav>
    )
}