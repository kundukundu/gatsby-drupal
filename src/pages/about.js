import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import Layout from '../components/layout'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const AboutPage = (props) => {
  const {classes} = props;

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="h2">Hi people</Typography>
        <Typography variant="subtitle1" paragraph>
          Welcome to about page <a href="https://material-ui.com">Material UI</a> for the UI.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Now go build something great or..
        </Typography>
        <Link to="/">Go to homepage</Link>
      </Paper>
    </Layout>
  );
};

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);
