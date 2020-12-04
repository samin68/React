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



export default function Users(props) {

 
  let [users, setUsers] = useState([]);
  let [checked, setChecked] = useState(0);
  
  
  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => {
        setUsers(json)
        // console.log(json.categories)
      })
      .catch((error)=>console.log(error))
  }, [])

  const {setCheckedUser} = props;

  const handleToggle = (event, id) => {
    let isNewItemSelected = checked;
    if (id !== checked) {
      isNewItemSelected = id;
    }
    setChecked(isNewItemSelected);
    setCheckedUser(isNewItemSelected);
   
  };



  return (
          <TableContainer component={Paper}>  

        <Table stickyHeader  aria-label="sticky table">  

          <TableHead>  
            <TableRow>  
              <TableCell>شناسه</TableCell>  
              <TableCell align="right">نام</TableCell> 
              <TableCell align="right">  نام کاربری</TableCell>   

              <TableCell align="right">  </TableCell>
              
            </TableRow>  
          </TableHead>  

          <TableBody>  
            {  
              users && users.map((user, index) => {  

                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {user.id}  
                  </TableCell>  

                  <TableCell align="right">{user.name}</TableCell>   
                  <TableCell align="right">{user.userName}</TableCell>   
                  <TableCell align="right">
                     <FormControlLabel
                       control={<Radio/>}
                       checked={checked === user.id}
                       tabIndex={-1}
                       disableRipple
                       onClick={(event) => handleToggle(event, user.id) }
                      label={''}
                  />
                 
                </TableCell>

                </TableRow>  
              })  

            }  
          </TableBody>  
        </Table>  

      </TableContainer>       
             
                    
  );
         
}


