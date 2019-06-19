import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const styles = {
  card: {
    maxWidth: 345,
    minHeight: 310,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const RecipeCard = (props) => {
  const { classes } = props;
  const RecipeLink = props => console.log(props) || <Link to={props.path} {...props}>Leer más</Link>;
  const RecipeImage = props => console.log(props) || <Img fluid={props.image.localFile.childImageSharp.fluid} />;
  return (
    <Card className={classes.card}>
      <CardContent>
        {props.image.localFile &&
           <Img fluid={props.image.localFile.childImageSharp.fluid} />
        }
        <Typography className={classes.title} color="textSecondary">
          {props.category}
        </Typography>
        <Typography variant="headline" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" dangerouslySetInnerHTML={{ __html: props.summary }} />
      </CardContent>
      <CardActions>
        <Button size="small" path={props.path} component={RecipeLink} />
      </CardActions>
    </Card>
  );
};

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default withStyles(styles)(RecipeCard);
