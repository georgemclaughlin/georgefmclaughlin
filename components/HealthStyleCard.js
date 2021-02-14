import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import * as gtag from '../lib/gtag'

const useStyles = makeStyles({
  card: {
    maxWidth: 575,
    margin: 25
  },
  cardImage: {
    maxWidth: "120px",
     width: "100%"
  },
});

const HealthStyleCard = () => {
    const clickTracking = (label) => {
        gtag.event({
          clientWindow: window,
          action: 'click',
          category: 'link button',
          label: label,
        });
      };
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <CardActionArea target="_blank" href="https://healthstyle.io/" onClick={() => clickTracking('HealthStyle Card')}>
        <CardContent>
          <img
            className={classes.cardImage}
            src="/HealthStyleLogo.png"
          />
          <Typography gutterBottom variant="h5" component="h2">
            HealthStyle.io
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An application about diets and considerations when selecting a diet.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          target="_blank"
          href="https://healthstyle.io/"
          size="small"
          color="primary"
          onClick={() => clickTracking('HealthStyle Card')}
        >
          Check it out
        </Button>
      </CardActions>
    </Card>
  );
};

export default HealthStyleCard;
