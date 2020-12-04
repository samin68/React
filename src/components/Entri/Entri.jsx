import React , { useEffect, useRef, useState }  from "react";
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper'; 


export default function Entri() {

 
  let [entrys, setEntrys] = useState([]);
  
 
  useEffect(() => {
    fetch("/api/entries")
      .then(res => res.json())
      .then(json => {
        setEntrys(json)
        // console.log(json.categories)
        console.log(Math.random())

      })
      .catch((error)=>console.log(error))
  }, [])



  return (
          <TableContainer component={Paper}>  

        <Table stickyHeader  aria-label="sticky table">  

          <TableHead>  
            <TableRow>  
              <TableCell>شناسه</TableCell>  
              <TableCell align="right">عنوان</TableCell> 
              {/* <TableCell align="right">  تاریخ</TableCell>  */}
              <TableCell align="right">  مقدار</TableCell>  
              <TableCell align="right">  دسته</TableCell>    
              
            </TableRow>  
          </TableHead>  
          <TableBody>  
            {  
              
              entrys && entrys.map((entry, index) => {  
              
                // const date = moment(“1399/08/15”, “jYYYY/jMM/jDD”).valueOf();
                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {entry.id}  
                  </TableCell>  
                  <TableCell align="right">{entry.title}</TableCell>   
                  {/* <TableCell align="right">{entry.date}</TableCell>  */}
                  <TableCell align="right">{entry.amount}</TableCell>  
                  <TableCell align="right">{entry.category.name}</TableCell>  
                
                </TableRow>  
              })  


            }  
          </TableBody>  
        </Table>  

      </TableContainer>       
             
                    
  );
         
}
