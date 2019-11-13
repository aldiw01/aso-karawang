import React from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Filter1 from "@material-ui/icons/Filter1";
import Filter2 from "@material-ui/icons/Filter2";
import Filter3 from "@material-ui/icons/Filter3";
import Star from "@material-ui/icons/Star";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

class TeamSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: '',
        username: '',
        email: '',
        imageUrl: '',
        score: '',
        duration: '',
        created: '',
        updated: ''
      }]
    }
    axios.get(process.env.REACT_APP_SERVER_API + 'score/top10')
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
      classes.imgCard
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Leaderboard</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={this.state.data[0].username ? this.state.data[1].imageUrl : ""} alt="Rank 2" className={imageClasses} />
                </GridItem>
                <InfoArea
                  title={this.state.data[0].username ? this.state.data[1].username : ""}
                  description={
                    this.state.data[0].username ?
                      <React.Fragment>
                        {this.state.data[0].username ? this.state.data[1].email : ""}<br />
                        Score: {this.state.data[1].score}<br />
                        Duration: {Math.floor(this.state.data[1].duration / 60000) + ":" + Math.floor((this.state.data[1].duration / 1000) % 60) + ":" + Math.floor(this.state.data[1].duration / 100) % 10}<br />
                        {this.state.data[0].username ? new Date(this.state.data[1].created).toLocaleString('en-GB') : ""}
                      </React.Fragment>
                      :
                      ""
                  }
                  icon={Filter2}
                  iconColor="success"
                  vertical
                />
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={this.state.data[0].imageUrl} alt="Rank 1" className={imageClasses} />
                  <div style={{ color: "#ff9800" }}>
                    <Star />
                  </div>
                </GridItem>
                <InfoArea
                  title={this.state.data[0].username}
                  description={
                    this.state.data[0].username ?
                      <React.Fragment>
                        {this.state.data[0].email}<br />
                        Score: {this.state.data[0].score}<br />
                        Duration: {Math.floor(this.state.data[0].duration / 60000) + ":" + Math.floor((this.state.data[0].duration / 1000) % 60) + ":" + Math.floor(this.state.data[0].duration / 100) % 10}<br />
                        {new Date(this.state.data[0].created).toLocaleString('en-GB')}
                      </React.Fragment>
                      :
                      ""
                  }
                  icon={Filter1}
                  iconColor="danger"
                  vertical
                />
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={this.state.data[0].username ? this.state.data[2].imageUrl : ""} alt="Rank 3" className={imageClasses} />
                </GridItem>
                <InfoArea
                  title={this.state.data[0].username ? this.state.data[2].username : ""}
                  description={
                    this.state.data[0].username ?
                      <React.Fragment>
                        {this.state.data[0].username ? this.state.data[2].email : ""}<br />
                        Score: {this.state.data[2].score}<br />
                        Duration: {Math.floor(this.state.data[2].duration / 60000) + ":" + Math.floor((this.state.data[2].duration / 1000) % 60) + ":" + Math.floor(this.state.data[2].duration / 100) % 10}<br />
                        {this.state.data[0].username ? new Date(this.state.data[2].created).toLocaleString('en-GB') : ""}
                      </React.Fragment>
                      :
                      ""
                  }
                  icon={Filter3}
                  iconColor="info"
                  vertical
                />
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
