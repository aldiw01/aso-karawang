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
import Navigator from "components/Navigator/Navigator.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class WOCPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised
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
                <h1 className={classes.title}>WOC</h1>
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
                    <h2 className={classes.subtitle}>WOC Overview</h2>
                    <h5 className={classes.description}>
                      Tour Smart Office WOC Karawang. Yuk lihat ada apa aja di WOC Karawang!
                    </h5>
                  </GridItem>
                </GridContainer>
                <div>
                  <GridContainer>
                    <GridItem xs={12}>
                      <iframe width="956" height="538" name="WOC" title="WOC Overview" className={imageClasses} src="https://www.youtube.com/embed/-b1VkOCnMPk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </GridItem>
                  </GridContainer>
                  <Navigator nextPage="/woc/provisioning" prevPage="/assurance/tools" />
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

export default withStyles(blogPageStyle)(WOCPage);
