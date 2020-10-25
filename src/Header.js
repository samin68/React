import React, {BaseSyntheticEvent as e, Component} from 'react';
import "./style.css";

class Header extends Component{
    constructor() {
        super();
    }



    render(){
        return(
              <div className={"header"}>
                  <p className={"header-p"}>Learning React</p>
              </div>
        )
    }
}

export default Header;