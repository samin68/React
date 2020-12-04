import React , { useEffect, useRef, useState }  from "react";
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper'; 
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MyContext from "components/MyContext";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import axios from 'axios';




export default function Categoryies(props) {
 
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      overflow: 'scroll',
      height: 500,
      backgroundColor: theme.palette.background.paper,
    },
    table: {},
    form: {
      width: '100%',
      padding: 20,
    },
  }));

  let [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState(0);


  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(json => {
        setCategories(json)
      })
      .catch((error)=>console.log(error))
  }, [])


 const {setCheckedCategory} = props;


 const handleToggle = (event, id) => {
     let isNewItemSelected =checked;
     if(id !== checked){
      isNewItemSelected=id;
     }
     setChecked(isNewItemSelected);
     setCheckedCategory(isNewItemSelected);
 }

   
 const deleteFilter= () =>{
    setChecked(0);
    // setCheckedCategory(0);
 }


 const classes = useStyles();


  return (

<MyContext.Provider  value={{categoryidSelected: checked}}>


<TableContainer component={Paper}>  


<Table stickyHeader  aria-label="sticky table">  
  <TableHead>  
    <TableRow>  
      <TableCell>شناسه</TableCell>  
      <TableCell align="right">دسته بندی ها</TableCell>  
      <TableCell align="right">انتخاب</TableCell>  
    </TableRow>  
  </TableHead>  

  <TableBody>  
    {  
      categories && categories.map((category, index) => {  

        return <TableRow key={index}>  

          <TableCell component="th" scope="row">  
            {category.id}  
          </TableCell>  
          <TableCell align="right">{category.name}</TableCell>

          <TableCell align="right">
                  <FormControlLabel
                    control={<Radio/>}
                    checked={checked === category.id}
                    tabIndex={-1}
                    disableRipple
                    onClick={(event) => handleToggle(event, category.id)}
                    label={''}
                   />
        </TableCell>

    
        </TableRow>  
      })  
    }  
  </TableBody>  
</Table>  

</TableContainer>   


   </MyContext.Provider>

       
             
                    
  );
         
}
