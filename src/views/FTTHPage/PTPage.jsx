import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Filter1 from "@material-ui/icons/Filter1";
import Filter2 from "@material-ui/icons/Filter2";
import Filter3 from "@material-ui/icons/Filter3";
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
import pt1 from "assets/img/pt/pt1.gif";
import pt2 from "assets/img/pt/pt2.gif";
import pt3 from "assets/img/pt/pt3.gif";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class PTPage extends React.Component {
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
                <h1 className={classes.title}>FTTH</h1>
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
                    <h2 className={classes.subtitle}>Provisioning Type</h2>
                    <h5 className={classes.description}>
                      Bagian ini menjelaskan tipe provisioning berdasarkan jalur penarikan instalasi kabel rumah, yuk pelajari apa sih bedanya!
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
                            tabButton: "PT1",
                            tabIcon: Filter1,
                            tabContent: (
                              <React.Fragment>
                                <img src={pt1} alt="Provisioning Type 1" className={imageClasses} />
                                <div className={classes.description}>
                                  Provisioning Type 1 adalah : pemasangan drop cable dari ODP yang tersedia sampai ke pelanggan.
                                </div>
                              </React.Fragment>
                            )
                          },
                          {
                            tabButton: "PT2",
                            tabIcon: Filter2,
                            tabContent: (
                              <React.Fragment>
                                <img src={pt2} alt="Provisioning Type 2" className={imageClasses} />
                                <div className={classes.description}>
                                  Provisioning Type 2 adalah : Provisioning berupa pemasangan ODP baru sampai dengan pemasangan drop cable ke pelanggan (PT1). ODP dipasang pada saat ada permintaan pelanggan di rute kabel distribusi FTTH.
                                </div>
                              </React.Fragment>
                            )
                          },
                          {
                            tabButton: "PT3",
                            tabIcon: Filter3,
                            tabContent: (
                              <React.Fragment>
                                <img src={pt3} alt="Provisioning Type 3" className={imageClasses} />
                                <div className={classes.description}>
                                  Provisioning Type 3 adalah : Provisioning dilakukan dari pemasangan kabel distribusi baru, pemasangan ODP sampai dengan pemasangan drop cable ke pelanggan (Belum ada rute atau rute habis secara kapasitas).
                                </div>
                              </React.Fragment>
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

export default withStyles(blogPageStyle)(PTPage);
