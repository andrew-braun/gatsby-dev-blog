import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Container from "../components/container";
import Layout from "../components/layout";

export default function Home() {
  return ( 
    <div className="main-container">
      <Header headerText="Basic Dev Blog" />
      <main>
        <p>This is where the magic happens.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Container>
          <h2>Container Component</h2>
          <p>It's being styled by a CSS module.</p>
        </Container>
      </main>
    </div>
  )
}
