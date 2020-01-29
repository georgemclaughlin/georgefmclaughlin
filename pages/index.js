import NavBar from "../components/NavBar.js";
import FSACard from "../components/FSACard.js";
import CloudRunCard from "../components/CloudRunCard.js";
import Grid from "@material-ui/core/Grid";

const Index = () => {
  return (
    <div>
      <NavBar />
      <Grid container spacing={3} justify="space-evenly">
        <Grid item s={3}>
          <FSACard />
          </Grid>
          <Grid item s={3}>
          <CloudRunCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
