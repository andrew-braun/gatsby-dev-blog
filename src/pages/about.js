import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import { Link } from "gatsby";


export default function About() {
    return (
        <div style = {{ color: 'orange'}}>
            <Header headerText="About the blog"/>
            <p>I already have several blogs I don't blog on.
                This will probably meet the same fate.
            </p>
        </div>
    )
}