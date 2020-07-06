import React from "react";
import { Link } from "gatsby";
import navStyles from "../styles/nav.module.css";

export default function Nav () {
    return (
        <nav className={navStyles.headerNav}>
            <Link to="/" className={navStyles.navLink}>Home</Link>
            <Link to="/about/" className={navStyles.navLink}>About </Link>
            <Link to="/contact/" className={navStyles.navLink}>Contact</Link>
        </nav>
    )
}