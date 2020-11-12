import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cover: {
    height: 400,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: 16
  }
}));

const Post = ({ post, onBack }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <Typography variant="caption" display="block" color="textSecondary">
        by: {post.author}
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        color="textSecondary"
      >
        date: {moment(post.created).format("dddd, MMMM Do YYYY")}
      </Typography>
      <div
        className={classes.cover}
        style={{ backgroundImage: `url(/postImages/${post.id}.png)` }}
      ></div>
      <Typography gutterBottom variant="h6">
        {post.description}
      </Typography>
      <Typography gutterBottom variant="body1">
        {post.body}
      </Typography>
      <div>
        <Button variant="contained" color="primary" onClick={onBack}>
          Back to list
        </Button>
      </div>
    </div>
  );
};

export default Post;
