import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TopBar from "components/TopBar";
import {makeServer} from '../server';
import Categoryies from "./Categories/Categories";
import Users from './Users/Users'
import Entri from "./Entri/Entri";
import Calender from "./Calender/Calender";




if (process.env.NODE_ENV === "development") {
    makeServer({environment: "development" })
  }
  
  const mystyle = {
     display:"flex",
  };
    
    
export default function Main() {

  return (
          
    <>
           
          <Container maxWidth="md" style={mystyle}>
                
                  <Users />
                 <Categoryies />
                 <Calender />
                
          </Container>

          <Entri/>
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




