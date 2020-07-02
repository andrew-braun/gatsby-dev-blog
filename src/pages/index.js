import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return ( 
    <div className="main-container">
      <Link to="/about/">About </Link>
      <Link to="/contact/">Contact</Link>
      <header>
        <Header headerText="Basic Dev Blog" />
      </header>
      <main>
        <p>This is where the magic happens.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </main>
    </div>
  )
}
