import React from "react";
// import { toast } from "react-toastify";
import { Link, useHistory} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "components/Button";
import { Avatar } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));


export default function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    name: "",
    userName: "",
    password: ""
  });

  let [newUserText, setNewUserText] = React.useState("");
  let [isSavingUser, setIsSavingUser] = React.useState();


  const handleChange = e => {
    const { name, value } = e.target;
    setState(st => ({ ...st, [name]: value }));
  };

  const handleSubmit=(e)=>{
        
    e.preventDefault();
    if (!newUserText) {
      return;
    }
    setIsSavingUser(true);
    fetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({
        text: newUserText,
        // ...(UserId && { UserId }),
      })
      
    })
         
    .then(() => history.replace("/"))
    



  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            autoComplete="name"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            value={state.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoComplete="userName"
            value={state.userName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={state.password}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // loading={loading}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>

          <Grid container>
            <Grid item>
              <Link to="/signin" variant="body2">
                ورود
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>
    </Container>
  );
}
