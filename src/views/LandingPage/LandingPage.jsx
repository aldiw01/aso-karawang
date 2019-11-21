import React from "react";
import axios from "axios";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  constructor() {
    super();
    var user;
    const profile = localStorage.getItem("auth") !== null && localStorage.getItem("auth") !== 'undefined' ? JSON.parse(localStorage.getItem("auth")) : "";
    if (profile !== "") {
      user = {
        name: profile.name,
        email: profile.email,
        givenName: profile.givenName,
        familyName: profile.familyName,
        imageUrl: profile.imageUrl
      }
    } else {
      user = '';
    }
    this.state = {
      feed: {
        name: user.name || '',
        email: user.email || '',
        rating: '',
        message: ''
      },
      user: user,
      selectedRating: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      feed: {
        ...this.state.feed,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    axios.post(process.env.REACT_APP_SERVER_API + 'feed', this.state.feed)
      .then(res => {
        this.setState({
          feed: {
            ...this.state.feed,
            rating: '',
            message: ''
          }
        })
        alert(res.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={logo}
          brand2={logo2}
          rightLinks={<HeaderLinks />}
          // rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>WOC Karawang</h1>
                <h4>
                  One stop point untuk pedoman ASO di Witel Karawang dalam rangka transformasi digital di Telkom Group.
                </h4>
                <br />
                {this.state.user !== "" ?
                  <Link to="/ftth">
                    <Button
                      color="danger"
                      size="lg"
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play" />
                      Get Started
                    </Button>
                  </Link> :
                  <Link to="/login">
                    <Button
                      color="danger"
                      size="lg"
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-sign-in-alt" />
                      Login
                    </Button>
                  </Link>
                }
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection
              feed={this.state.feed}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              selectedRating={this.state.feed.rating}
              user={this.state.user}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
