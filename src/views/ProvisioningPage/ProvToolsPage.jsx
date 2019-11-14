import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Stars from "@material-ui/icons/Stars";
import Launch from "@material-ui/icons/Launch";
import NetworkCheck from "@material-ui/icons/NetworkCheck";
import OpenInBrowser from "@material-ui/icons/OpenInBrowser";
import Telegram from "@material-ui/icons/Telegram";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";
import statusOrder from "assets/img/provisioning/status order.jpg";
import fulfillmentNoss from "assets/img/provisioning/fulfillment noss.jpg";
import wfmFlow from "assets/img/provisioning/wfm flow.jpg";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class ProvToolsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
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
                <h1 className={classes.title}>Provisioning</h1>
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
                    <h2 className={classes.subtitle}>IT Tools</h2>
                    <h5 className={classes.description}>
                    Bagian ini menjelaskan terkait IT Tools yang digunakan dalam proses provisioning. Yuk pelajari kegunaan masing-masing toolsnya!
                    </h5>
                  </GridItem>
                </GridContainer>
                <div>
                  <GridContainer justify="center">
                    <GridItem xs={12}>
                      <NavPills
                        color="danger"
                        tabs={[
                          {
                            tabButton: "My Indihome",
                            tabIcon: Home,
                            tabContent: (
                              <React.Fragment>
                                <img src={statusOrder} alt="Status Order" className={imageClasses} />
                              </React.Fragment>
                            )
                          },
                          {
                            tabButton: "StarClick",
                            tabIcon: Stars,
                            tabContent: (
                              <img src={fulfillmentNoss} alt="Fulfillment Noss" className={imageClasses} />
                            )
                          },
                          {
                            tabButton: "NOSS-F",
                            tabIcon: Launch,
                            tabContent: (
                              <img src={wfmFlow} alt="WFM Flow" className={imageClasses} />
                            )
                          },
                          {
                            tabButton: "iBooster",
                            tabIcon: NetworkCheck,
                            tabContent: (
                              <img src={wfmFlow} alt="WFM Flow" className={imageClasses} />
                            )
                          },
                          {
                            tabButton: "Karawang-Pro",
                            tabIcon: OpenInBrowser,
                            tabContent: (
                              <img src={wfmFlow} alt="WFM Flow" className={imageClasses} />
                            )
                          },
                          {
                            tabButton: "Smart Jawara",
                            tabIcon: Telegram,
                            tabContent: (
                              <img src={wfmFlow} alt="WFM Flow" className={imageClasses} />
                            )
                          }
                        ]}
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

export default withStyles(blogPageStyle)(ProvToolsPage);
