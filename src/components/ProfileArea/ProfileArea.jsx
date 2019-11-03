import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

function ProfileArea({ ...props }) {
  const { classes, title, subtitle } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.infoArea}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className="m-auto">
          <img src={props.icon} alt="Profile" className={imageClasses} />
        </GridItem>
      </GridContainer>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <h6>{subtitle}</h6>
      </div>
    </div>
  );
}

ProfileArea.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default withStyles(infoStyle)(ProfileArea);
