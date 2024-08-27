// import React from "react";
// import { Greeting } from "./components/Greeting";
// import { SocialLinks } from "./components/SocialLinks";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { HelpfulResource } from "./components/HelpfulResource";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";


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
    <Section title="Helpful resources">
      <HelpfulResource
      link="https://bobbyhadz.com/blog/react-open-link-in-new-tab"
      label="How to Open a link in a new tab in React by Borislav Hadzhiev"
      />
      <HelpfulResource
      link="https://www.w3schools.com/howto/howto_js_copy_clipboard.asp"
      label="How to Copy Text to Clipboard by W3 Schools"
      />
      <HelpfulResource
      link="https://atlas-jswank.github.io/blog/jsx/"
      label="What is JSX? by Jeremiah Swank"
      />
      <HelpfulResource
      link="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=1192s"
      label="React Full Course for Free by Bro Code"
      />
      <HelpfulResource
      link="https://atlas-jswank.github.io/blog/hello-react/"
      label="Hello React by Jeremiah Swank"
      />
    </Section>
    <AboutMe />
    <Footer />
    </>
  );
}

export default App;
