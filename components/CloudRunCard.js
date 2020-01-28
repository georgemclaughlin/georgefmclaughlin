import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 575,
    margin: 25
  },
  cardImage: {
    maxWidth: "240px",
     width: "100%"
  },
});

const CloudRunCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea>
        <CardContent>
          <img
            className={classes.cardImage}
            src="/cloudRunAndGitHub.png"
          />
          <Typography gutterBottom variant="h5" component="h2">
            Deploy to Google Cloud Run with GitHub Actions
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Sample project showing how to build a docker image of an API and
            deploy it to Google Cloud Run using GitHub Actions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          target="_blank"
          href="https://github.com/georgemclaughlin/reddit_posts_server"
          size="small"
          color="primary"
        >
          Check it out
        </Button>
      </CardActions>
    </Card>
  );
};

export default CloudRunCard;
