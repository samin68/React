import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "components/Button";
import { ArticleService } from "components/Article";
import { useForm } from "react-hook-form";
import { storage } from "services";
import { SettingsBackupRestore } from "@material-ui/icons";
//import JoditEditor from "jodit-react";


export default function AddArticle() {

  const { register, errors, reset, handleSubmit } = useForm();
  const[image,setImage]=useState(null);
  //const[tasks, setTasks]= React.useState([]);
 // const[newTask, setNewTask]=React.useState('');

  const handleChange = e =>{
    if(e.target.files[0]){ 
       setImage(e.target.files[0]);
    }

  };

  const handleUpload=()=>{

            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "stage_changed",
               // snapshot={},
                error=>{
                  console.log(error);
                },
                ()=>{
                  storage
                     .ref("images")
                     .child(image.name)
                     .getDownloadURL()
                     .then (url => {
                         console.log(url)
                     });
                }
            );
  };

  console.log("image:", image);



  const onSubmit = article => {
    ArticleService.create(article)
      .then(() => alert("done"))
      .catch(error => console.log(error))
      console.log(article)
  };

  // React.useEffect(()=>{
  //   const fetchData = async () => {
  //      const db = firebase.firestore();
  //      db.collection("tasks")
  //           .onSnapshot(function(data){
  //               console.log(data)
  //               (data.docs.map(doc => ({...doc.data(), id: doc.id})));

  //           })
  //   }
  // }, []);



  // const onSubmit = article => {
  //   ArticleService.getAll(article)
  //     .then(() => alert("done"))
  //     .catch(error => console.log(error));
      
  //     console.log(article)
  // };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} style={{ marginTop: 16 }}>
        <Grid item xs={12}>
          <TextField
            name="title"
            label="Title"
            defaultValue=""
            variant="outlined"
            fullWidth
            inputRef={register({
              required: "Title is required",
              maxLength: {
                value: 250,
                message: "Title must be less than 250 characters"
              }
            })}
            error={!!errors.title}
            helperText={!!errors.title && errors.title.message}
          />
        </Grid>

        <input type="file" onChange={handleChange}/>
        
        <Grid item xs={12}>
          <TextField
            name="body"
            label="Body"
            defaultValue=""
            variant="outlined"
            multiline
            fullWidth
            inputRef={register({ required: "Body is required" })}
            error={!!errors.body}
            helperText={!!errors.body && errors.body.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginRight: 8 }}
            onClick={handleUpload}
          >
            Submit
          </Button>
          <Button variant="contained" type="reset"       onClick={reset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
