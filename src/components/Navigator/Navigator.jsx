import React from 'react';
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

function Navigator({ ...props }) {
  const { nextPage, prevPage } = props;
  return (
    <GridContainer justify="space-between" style={{ marginTop: "2rem" }}>
      <GridItem xs={4}>
        {prevPage ?
          <Link to={prevPage}>
            <Button
              color="github"
              style={{ width: "100%" }}
            >
              <i className="fa fa-arrow-left" />&emsp;
              Previous Page
          </Button>
          </Link>
          :
          ""
        }
      </GridItem>
      <GridItem xs={4}>
        {nextPage ?
          <Link to={nextPage}>
            <Button
              color="github"
              style={{ width: "100%" }}
            >
              Next Page&emsp;
            <i className="fa fa-arrow-right" />
            </Button>
          </Link>
          :
          ""
        }
      </GridItem>
    </GridContainer>
  );
}

Navigator.propTypes = {
  nextPage: PropTypes.string,
  prevPage: PropTypes.string
};

export default Navigator;
