import NavBar from "../components/NavBar.js";
import FSACard from "../components/FSACard.js";
import CloudRunCard from "../components/CloudRunCard.js";
import HealthStyleCard from "../components/HealthStyleCard.js";
import Grid from "@material-ui/core/Grid";

const Index = () => {
  return (
    <div>
      <NavBar />
      <Grid container spacing={3} justify="space-evenly" alignItems="stretch">
      <Grid item xs>
          <HealthStyleCard />
          </Grid>
          <Grid item xs>
          <FSACard />
          </Grid>
          <Grid item xs>
          <CloudRunCard />
          </Grid>
      </Grid>
    </div>
  );
};

export default Index;
