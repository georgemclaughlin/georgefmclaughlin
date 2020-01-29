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
      maxWidth: "500px",
      width: "100%"
    }
  });

const FSACard = () => {
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
            <CardActionArea>
              <CardContent>
                <img className={classes.cardImage} src="/29r-03Logo.png" />
                <Typography gutterBottom variant="h5" component="h2">
                  29R-03.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  FSA Organizer allows you to quickly assess Forensic Schedule
                  Analysis Methods. Used by Lawyers to examine and verify FSA
                  Methods. Used by Analysts to select the appropriate method and
                  create a custom report.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                target="_blank"
                href="https://29r-03.com/"
                size="small"
                color="primary"
                onClick={() => clickTracking('FSA Organizer Card')}
              >
                Check it out
              </Button>
            </CardActions>
          </Card>
  );
};

export default FSACard;
