import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeServer} from '../server';
import "react-toastify/dist/ReactToastify.css";
import Main from "components/Main"
import Signup from "pages/Signup"
import Signin from "pages/Signin"




export default function App() {
    return (
        <>
          <CssBaseline />
          <ToastContainer />
          <Router>
             <Switch>
               <Route exact path="/signin" component={Signin} />
               <Route exact path="/signup" component={Signup} />
               <Route component={Main} />
             </Switch>
          </Router>
        </>
     
    );
  }








// if (process.env.NODE_ENV === "development") {
//   makeServer()
// }

// export default function App() {
//   return (
//      <>
//        <Categoryies/>
//        {/* <h1>React Course Final</h1> */}
//      </>
//   );   
// }
