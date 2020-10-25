import React, {BaseSyntheticEvent as e, Component} from 'react';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./style.css";


class Form extends Component{
    constructor() {
        super();
        this.state={
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            birthDate: "",
            title: "",
            address: "",
            gender: "",
            selectedFile:""
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.handleData(this.state)
    }

    handleChange=(event)=>{
        let name = event.target.name;
        this.setState({
            [name]:event.target.value
        })
    }



    render(){
        return(
            <form  className={"formDivStyle"} >

                <TextField   className={"formInput"} name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}
                             id="outlined-basic" label="First Name" variant="outlined"/>
                <TextField name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}
                           id="outlined-basic" label="Last Name" variant="outlined"/>

                <br/>

                <TextField name="phone" className={"formInput"} type="phone" value={this.state.phone} onChange={this.handleChange}
                           id="outlined-basic" label="Phone" variant="outlined"/>
                <TextField name="email" type="email" value={this.state.email}  onChange={this.handleChange} id="outlined-basic" label="Email Address"
                           variant="outlined"/>
                <br/>

                <TextField name="birthDate" className={"formInput"} type="text" value={this.state.birthDate} onChange={this.handleChange}
                           id="outlined-basic" label="Bith Date" variant="outlined"/>
                <TextField name="title" type="text" value={this.state.title}  onChange={this.handleChange} id="outlined-basic" label="Title"
                           variant="outlined"/>
                <br/>

                <TextareaAutosize name="address" type="text" value={this.state.address} onChange={this.handleChange} className={"formTextArea"}  aria-label="empty textarea" placeholder="Address"  />

                <br/>

                <label className={"padInput"}>Gender</label>
                <RadioGroup aria-label="gender" name="gender1" value={this.state.radio} onChange={this.handleChange}>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                </RadioGroup>


                <Button   onClick={this.handleSubmit} type="submit"  value="submit"  className={"submitMargin"} variant="contained">SUBMIT</Button>

            </form>
        )
    }
}

export default Form;