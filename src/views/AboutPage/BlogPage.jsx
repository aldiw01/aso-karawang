import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ProfileArea from "components/ProfileArea/ProfileArea.jsx";
import Button from "components/CustomButtons/Button.jsx";

import profile from "assets/img/faces/aldi.jpg";
import user from "assets/img/faces/user.svg";
import users from "assets/img/faces/users.svg";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class BlogPage extends React.Component {
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
        <Parallax small filter image={require("assets/img/profile-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <h1 className={classes.title}>About</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
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
                      <h3 className={classes.subtitle}>Manager Access Service Operation</h3>
                      <h6>Aldi Wiranata</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
              </div>
              <div className={classes.section}>
                {/* <div> */}
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Asman WOC"
                      subtitle="-"
                      icon={user}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Asman WMS"
                      subtitle="Oyok Rosidi"
                      icon={profile}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Asman Fulfilment"
                      subtitle="-"
                      icon={user}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Asman Assurance"
                      subtitle="-"
                      icon={user}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="OFF 2 WOC"
                      subtitle="-"
                      icon={user}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    {/* <ProfileArea
                      title="Asman Assurance"
                      subtitle="Free Chat"
                      icon={profile}
                    /> */}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Telkom Akses"
                      subtitle=""
                      icon={users}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Telkom Akses"
                      subtitle=""
                      icon={users}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="OFF 3 WOC 24/7"
                      subtitle="Aditya Indra B"
                      icon={profile}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    {/* <ProfileArea
                      title="Asman Assurance"
                      subtitle="Free Chat"
                      icon={profile}
                    /> */}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    {/* <ProfileArea
                      title="Telkom Akses"
                      subtitle=""
                      icon={users}
                    /> */}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    {/* <ProfileArea
                      title="Telkom Akses"
                      subtitle=""
                      icon={users}
                    /> */}
                  </GridItem>
                </GridContainer>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(blogPageStyle)(BlogPage);
