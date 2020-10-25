import React, {Component} from 'react'
import Header from "./Header";
import Form from "./Form";
import "./style.css";



 class DisplayData extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            birthDate: "",
            title: "",
            address: "",
            gender: "",
        };
    }

    handleParentData = (formModel) => {
        console.log(formModel);
        this.setState({...formModel});
    }

    render() {
        return (
            <>
                <Header/>

                <Form handleData={this.handleParentData} />

                <div className={"DisplayDivStyle"}>

                    <p >{this.state.firstName}</p>
                    <p >{this.state.lastName}</p>
                    <p >{this.state.phone}</p>
                    <p >{this.state.email}</p>
                    <p >{this.state.birthDate}</p>
                    <p >{this.state.title}</p>
                    <p >{this.state.address}</p>
                    <p >{this.state.gender}</p>

                </div>

            </>
        )
    }
}

export default  DisplayData