import NavBar from "../components/NavBar.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";

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

const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container spacing={3} justify="space-evenly">
        <Grid item xs>
          <Card className={classes.card} variant="outlined">
            <CardActionArea>
              <CardContent>
                <img className={classes.cardImage} src="/29r-03Logo.png" />
                <Typography gutterBottom variant="h5" component="h2">
                  29R-03.com
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  FSA Organizer allows you to quickly asses Forensic Schedule
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
              >
                Check it out
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
