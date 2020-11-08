import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Signin from "pages/Signin";
import Signup from "pages/Signup";
import Main from "./Main";
import "react-toastify/dist/ReactToastify.css";
//import React, {useContext} from 'react';
//import {firebaseAuth} from 'Provider/AuthProvider';



export default function App() {
 // const {handleSignup} = useContext(firebaseAuth)
  //console.log(handleSignup)

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route component={Main} />
        </Switch>
      </Router>
      <ToastContainer />
    </React.Fragment>
  );
}






