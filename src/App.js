import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Projects from "./components/projects.component";
// import ExercisesList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercises.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      {/* <div className = "container"> */}
      <Navbar/>
      <br/>
      <Route path="/" exact component = {Home} />
      <Route path="/About" exact component = {About}/>
      <Route path="/Projects" exact component = {Projects}/>
      {/* 
      <Route path="/edit/:id"  component = {EditExercise} />
      <Route path="/create"  component = {CreateExercise} />
      <Route path="/user" exact component = {CreateUser} /> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
