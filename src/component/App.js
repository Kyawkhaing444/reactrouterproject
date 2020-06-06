import React from "react";
import Home from "./Home";
import About from "./About";
import Topic from "./Topic";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>
        </ul>

        <hr/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/topic' component={Topic}/>


      </div> 
    </BrowserRouter>
  );
}

export default App;
