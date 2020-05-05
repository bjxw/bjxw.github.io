import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";

import SoftwareIntro from "./components/software-intro.component";
import SoftwareResumeCV from "./components/software-resume.component";
import SoftwarePortfolio from './components/software-portfolio.component';

import EsportsIntro from "./components/esports-intro.component";
import Esports_Collegiate_Professional from './components/esports-collegiate-professional.component';

// import ExercisesList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercises.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      {/* <div className = "container"> */}
      <Navbar/>

      <Route path="/" exact component = {Home} />
      <Route path="/About" exact component = {About}/>

      <Route path="/Software_Intro" exact component = {SoftwareIntro}/>
      <Route path="/ResumeCV" exact component = {SoftwareResumeCV}/>
      <Route path="/Portfolio" exact component = {SoftwarePortfolio}/>

      <Route path="/Esports_Intro" exact component = {EsportsIntro}/>
      <Route path="/Esports_Collegiate_Professional" exact component = {Esports_Collegiate_Professional}/>

      {/* 
      <Route path="/edit/:id"  component = {EditExercise} />
      <Route path="/create"  component = {CreateExercise} />
      <Route path="/user" exact component = {CreateUser} /> */}
      
      {/* </div> */}
    </Router>
  );
}

export default App;
