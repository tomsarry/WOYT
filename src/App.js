import React from "react";
import "./App.css";
import "./css/main.scss";
import { Content } from "./components/Content";
import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ScrollReveal from "scrollreveal";

function App() {
  return (
    <div className="App">
      {/* logo, help, donate, socials */}
      <Header />

      <Content />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
