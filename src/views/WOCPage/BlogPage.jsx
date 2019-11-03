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
import InfoArea from "components/InfoArea/InfoArea.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class BlogPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
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
                <h1 className={classes.title}>WOC (Witel Operation Center)</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <div className={classes.section}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.subtitle}>Let's talk product</h2>
                    <h5 className={classes.description}>
                      This is the paragraph where you can write more details about your
                      product. Keep you user engaged by providing meaningful
                      information. Remember that by this time, the user is curious,
                      otherwise he wouldn't scroll to get here. Add a button if you want
                      the user to see more.
                    </h5>
                  </GridItem>
                </GridContainer>
                <div>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <InfoArea
                        title="Free Chat"
                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                        icon={Chat}
                        iconColor="info"
                        vertical
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <InfoArea
                        title="Verified Users"
                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                        icon={VerifiedUser}
                        iconColor="success"
                        vertical
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <InfoArea
                        title="Fingerprint"
                        description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                        icon={Fingerprint}
                        iconColor="danger"
                        vertical
                      />
                    </GridItem>
                  </GridContainer>
                </div>
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
