import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Container from "../components/container";
import User from "../components/user";
import { Link } from "gatsby";


export default function About() {
    return (
        <div style = {{ color: 'orange'}}>
            <Header headerText="About the blog"/>
            <Container>
                <p>I already have several blogs I don't blog on.
                    This will probably meet the same fate.
                </p>
                <h2>Meet the team!</h2>
                <User
                    username="Andrea Braun"
                    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                    excerpt="Some call me Tim. I rage against the machine. That machine is a toaster oven."
                />
                <User
                    username="Bob Smith"
                    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                    excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
            </Container>
        </div>
    )
}