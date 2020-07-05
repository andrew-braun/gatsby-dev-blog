import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"


export default function About() {
    return (
        <div style = {{ color: 'orange'}}>
            <Link to="/">Home</Link>
            <Link to="/about/">About </Link>
            <Link to="/contact/">Contact</Link>
            <Header headerText="About the blog"/>
            <p>I already have several blogs I don't blog on.
                This will probably meet the same fate.
            </p>
        </div>
    )
}