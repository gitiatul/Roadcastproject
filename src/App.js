import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from './components/Navbar';
import Head from './components/Head';
import Footer from './components/Footer';
import Error404 from './components/Error404';



function App(){
  return(
    <div>
    <Head />
    <Header />
    <br>

    </br>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/Contact">
    <Contact />
    </Route>
    <Route path="/Aboutme">
    <Aboutme />
    </Route>
    <Route path="/Login">
    <Login />
    </Route>
    <Route path="/Signup">
    <Signup />
    </Route>
    <Route path="/Error404">
    <Error404 />
    </Route>
    <br></br>
    <Footer />
    </div>
  )
}

export default App;