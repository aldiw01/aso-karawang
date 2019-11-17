import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import CompareArrows from "@material-ui/icons/CompareArrows";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import Category from "@material-ui/icons/Category";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Build from "@material-ui/icons/Build";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Navigator from "components/Navigator/Navigator.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";
import statusOrder from "assets/img/provisioning/status order.jpg";
import fulfillmentNoss from "assets/img/provisioning/fulfillment noss.jpg";
import wfmFlow from "assets/img/provisioning/wfm flow.jpg";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class AssuranceWOPage extends React.Component {
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
                <h1 className={classes.title}>Assurance</h1>
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
                    <h2 className={classes.subtitle}>Work Order</h2>
                    <h5 className={classes.description}>
                      Bagian ini menjelaskan hal-hal terkait assurance mulai dari alur dan status tiket, kategori assurance, jenis pelanggan VVIP, dan pertolongan pertama pada gangguan. Langsung aja yuk pelajari apa aja sih yang ada di assurance!
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
                            tabButton: "Alur Tiket",
                            tabIcon: CompareArrows,
                            tabContent: (
                              <img src={fulfillmentNoss} alt="Fulfillment Noss" className={imageClasses} />
                            )
                          },
                          {
                            tabButton: "Status",
                            tabIcon: AssignmentTurnedIn,
                            tabContent: (
                              <React.Fragment>
                                <img src={statusOrder} alt="Status Order" className={imageClasses} />
                              </React.Fragment>
                            )
                          },
                          {
                            tabButton: "Kategori",
                            tabIcon: Category,
                            tabContent: (
                              <img src={fulfillmentNoss} alt="Fulfillment Noss" className={imageClasses} />
                            )
                          },
                          {
                            tabButton: "Pelanggan VVIP",
                            tabIcon: MonetizationOn,
                            tabContent: (
                              <img src={wfmFlow} alt="WFM Flow" className={imageClasses} />
                            )
                          },
                          {
                            tabButton: "Troubleshoot",
                            tabIcon: Build,
                            tabContent: (
                              <img src={wfmFlow} alt="WFM Flow" className={imageClasses} />
                            )
                          }
                        ]}
                      />
                    </GridItem>
                  </GridContainer>
                  <Navigator nextPage="/assurance/tools" prevPage="/provisioning/tools" />
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

export default withStyles(blogPageStyle)(AssuranceWOPage);
