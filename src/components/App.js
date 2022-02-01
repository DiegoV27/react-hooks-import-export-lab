import React from "react";
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import User from "./data/user"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <User />
    </div>
  );
}

export default App;
