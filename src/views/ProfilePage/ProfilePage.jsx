import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/aldi.jpg";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
          brand={logo}
          brand2={logo2}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Aldi Wiranata</h3>
                      <h6>DEVELOPER</h6>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        title="Email"
                        href="mailto:aldiw01@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={"fas fa-at"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        title="Linkedin"
                        href="https://www.linkedin.com/in/aldiw01/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        title="Github"
                        href="https://github.com/aldiw01"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={"fab fa-github"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description} style={{ paddingBottom: "3rem" }}>
                <p>
                  A passionate web developer and AI researcher, Aldi Wiranata — Born and Grow up in Jakarta until he moved for attending a university in Bandung. Rarely go hang out as he preferred to stay at home doing his hobbies such as watching movies and codes.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
