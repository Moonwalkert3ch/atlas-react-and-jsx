// import React from "react";
import { Greeting } from "./components/Greeting";
import { SocialLinks } from "./components/SocialLinks";
import { Header } from "./components/Header";
import { Section } from "./components/Section";


function App() {
  return (
    <>
    <Header />
    <Section title="What is react?">
      <p>React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications where a dynamic and responsive user experience is essential. It allows developers to create reusable UI components that manage their own state and can be composed to build complex user interfaces.</p>
    </Section>
    <Section title="Benefits of react">
      <ul>
        <li>Component-Based Architecture</li>
        <li>Virtual DOM</li>
        <li>Declarative Syntax</li>
        <li>Strong Ecosystem</li>
        <li>Rich Community and Support</li>
      </ul>
    {/* <div className="app">Hello Atlas</div> */}
    {/* <Greeting /> */}
    {/* <SocialLinks /> */}
    </Section>
    </>
  );
}

export default App;
