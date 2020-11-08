import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ArticleService } from "components/Article";
import { useForm } from "react-hook-form";

export default function AddArticle() {
  const [article, setArticle] = React.useState({ title: "", body: "" });
    //react-hook-form
    const { handleSubmit, register, errors } = useForm();

 // const handleChange = e => {
  //  const { name, value } = e.target;
  //  setArticle(state => ({ ...state, [name]: value }));
  //};

  const onSubmit = () => {
    ArticleService.create(article)
      .then(() => alert("done"))
      .catch(error => console.log(error));
  };

  return (
    <Grid container spacing={2} style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <TextField
          name="title"
          fullWidth
          variant="outlined"
          label="Title"
         // value={article.title}
         // onChange={handleChange}
          ref={register}
          defaultValue="test"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="body"
          fullWidth
          variant="outlined"
          label="Body"
          multiline
          //value={article.body}
         // onChange={handleChange}
         ref={register}
         defaultValue="test"
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary"  onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
