import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import CV from "./components/cv.component";

function App() {
  return (
    <Router>
      {/* <div className = "container"> */}
      <Navbar/>

      <Route path="/" exact component = {Home} />
      <Route path="/CV" exact component = {CV}/>
    </Router>
  );
}

export default App;
