import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  title: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  titleContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  counts: {
    marginLeft: theme.spacing.unit * 2
  }
});

const Title = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Paper className={classes.title}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.titleContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                inline
                gutterBottom
              >
                Todo App
              </Typography>
              {props.num_of_remains && props.num_of_todos ? (
                <Typography
                  className={classes.counts}
                  variant="h5"
                  color="inherit"
                  inline
                  gutterBottom
                  data-testid="counts"
                >
                  ({props.num_of_remains}/{props.num_of_todos})
                </Typography>
              ) : null}

              <Typography variant="h5" color="inherit" paragraph>
                Welcome to my todo app!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

Title.propTypes = {
  num_of_remains: PropTypes.number,
  num_of_todos: PropTypes.number,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
