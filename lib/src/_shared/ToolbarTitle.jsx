import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const ToolbarTitle = (props) => {
  const { classes, className, text, ...other } = props;

  return (
    <Typography
      className={classnames(classes.toolbarTitle, className)}
      {...other}
    >
      {text}
    </Typography>
  );
};

ToolbarTitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ToolbarTitle.defaultProps = {
  className: '',
};

const styles = theme => ({
  toolbarTitle: {
    color: theme.palette.common.white,
  },
});

export default withStyles(styles, { name: 'MuiPickersToolbarTitle' })(ToolbarTitle);
