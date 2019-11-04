import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ProfileArea from "components/ProfileArea/ProfileArea.jsx";

import profile from "assets/img/faces/aldi.jpg";
import user from "assets/img/faces/user.svg";
import users from "assets/img/faces/users.svg";

import GM from "assets/img/faces/GM - Sonny.png";
import WR from "assets/img/faces/WR - Heri.png";
import ASO from "assets/img/faces/ASO - Yahya.png";
import AOM from "assets/img/faces/AOM - Agus Kharis.png";
import NWIS from "assets/img/faces/NWIS - Agus Toni.png";
import CCANWAN from "assets/img/faces/CCANWAN - Kasum.png";
import CS from "assets/img/faces/CS - Krisdian.png";
import BGES from "assets/img/faces/BGES - Heru.png";
import LOGGS from "assets/img/faces/LOGGS - Surwa.png";
import HRCDC from "assets/img/faces/HRCDC - Novan.png";
import FPC from "assets/img/faces/FPC - Kadarisman.png";
import KKDTLPWK from "assets/img/faces/KKDTLPWK - Tavip.png";
import KKDTLSUB from "assets/img/faces/KKDTLSUB - Syaefudin.png";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class WitelPage extends React.Component {
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
                      <img src={GM} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.subtitle}>General Manager</h3>
                      <h6>Sonny Hidayat</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Put a description here.{" "}
                </p>
              </div>
              <div className={classes.section}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager War Room"
                      subtitle="Heri Saktianto"
                      icon={WR}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager Access SO"
                      subtitle="Yahya"
                      icon={ASO}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager Access OM"
                      subtitle="Agus Kharis"
                      icon={AOM}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager NW & IS"
                      subtitle="Agus Toni"
                      icon={NWIS}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager CCAN & WAN"
                      subtitle="Kasum"
                      icon={CCANWAN}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager Consumer Service"
                      subtitle="Krisdian"
                      icon={CS}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager BGES"
                      subtitle="Heru K"
                      icon={BGES}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager Log & GS"
                      subtitle="M Surwa"
                      icon={LOGGS}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager HR & CDC"
                      subtitle="Novan Restu"
                      icon={HRCDC}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Manager FPC"
                      subtitle="Kadarisman"
                      icon={FPC}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Kakandatel Purwakarta"
                      subtitle="Tavip Junaidi Jaya"
                      icon={KKDTLPWK}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <ProfileArea
                      title="Kakandatel Subang"
                      subtitle="Akhmad Syaefudin"
                      icon={KKDTLSUB}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(blogPageStyle)(WitelPage);
