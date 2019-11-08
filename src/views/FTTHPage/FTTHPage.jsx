import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Home from "@material-ui/icons/Home";
import SettingsInputComponent from "@material-ui/icons/SettingsInputComponent";
import Kitchen from "@material-ui/icons/Kitchen";
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Topologi from "./Section/Topologi.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";
import ftth from "assets/img/ftth/ftth.png";
import OLTFTM from "assets/img/ftth/OLT & FTM.png";
import ODC from "assets/img/ftth/ODC.png";
import ODP from "assets/img/ftth/ODP.png";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class FTTHPage extends React.Component {
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
                    <h2 className={classes.subtitle}>Overview</h2>
                    <h5 className={classes.description}>
                      Jaringan kabel lokal fiber Optik ( Fiber to The X / FTTx )  paling sedikitnya terdapat 2 perangkat aktif ( Opto Elektrik ) yang dipasang  di Central Office dan yang satu lagi dipasang di dekat dan atau di lokasi pelanggan.
                      <br /><br />
                      Berdasarkan lokasi penempatan perangkat aktif yang dipasang terdapat beberapa Konfigurasi yaitu FTTB (Building), FTTZ (Zone), FTTC (Curb/Cabinet), dan FTTH (Home). Disini kita hanya mempelajari FTTH, yuk pelajari detailnya!
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
                            tabButton: "FTTH",
                            tabIcon: Home,
                            tabContent: (
                              <React.Fragment>
                                <img src={ftth} alt="Provisioning Type 1" className={imageClasses} />
                                <div className={classes.subdescription}>
                                  FTTH (Fiber To The Home) adalah jaringan kabel lokal yang menghubungkan Central Office sampai rumah pelanggan dengan menggunakan kabel fiber optik.
                                </div>
                                <Topologi />
                              </React.Fragment>
                            )
                          },
                          {
                            tabButton: "OLT & FTM",
                            tabIcon: SettingsInputComponent,
                            tabContent: (
                              <React.Fragment>
                                <img src={OLTFTM} alt="Provisioning Type 2" className={imageClasses} />
                                <div className={classes.subdescription} style={{ textAlign: "justify" }}>
                                  FTM (Fiber Termination Management) Merupakan infrastruktur jaringan akses berbasis fiber optik khususnya jaringan akses FTTx yang berada di posisi central office. Perangkat FTM berfungsi sebagai manajemen terminasi kabel optik pada jaringan akses dan crossconnect serta interconnection patchcord atara O-Akses, E-Akses, dan E-Trans. FTM juga biasa disebut sebagai ODF (Optical Distribution Frame).
                                  <br /><br />
                                  ODF/FTM ada di ruang FTMS penghubung antara Out Site Plant (OSP) dan In Site Plant (ISP).
                                  Optical Line Terminal ( OLT ) adalah suatu perangkat aktif ( Opto-Elektik )
                                  yang berfungsi :
                                  <ol style={{ textAlign: "justify" }}>
                                    <li>Mengubah sinyal Elektrik <i className="fas fa-arrow-right"></i> Sinyal Optik</li>
                                    <li>Sebagai multiplexer</li>
                                  </ol>
                                </div>
                              </React.Fragment>
                            )
                          },
                          {
                            tabButton: "ODC",
                            tabIcon: Kitchen,
                            tabContent: (
                              <React.Fragment>
                                <img src={ODC} alt="Provisioning Type 3" className={imageClasses} />
                                <div className={classes.subdescription}>
                                  <ol style={{ textAlign: "justify" }}>
                                    <li>Pada ODC (Optical Distribution Cabinet) dibagi dua sisi ada Sisi Feeder dan Sisi Distribusi</li>
                                    <li>Terdapat passive splitter 1:4 yang akan membagi core feeder menjadi 4 core distribusi</li>
                                    <li>Kabel feeder disambung dengan pigtail pada base tray feeder</li>
                                    <li>Kabel distribusi disambung dengan pigtail pada base tray distribusi</li>
                                    <li>Perbandingan port feeder dan distribusi adalah 20% : 80%</li>
                                  </ol>
                                </div>
                              </React.Fragment>
                            )
                          },
                          {
                            tabButton: "ODP",
                            tabIcon: LocationOn,
                            tabContent: (
                              <React.Fragment>
                                <img src={ODP} alt="Provisioning Type 3" className={imageClasses} />
                                <div className={classes.subdescription}>
                                  <ol style={{ textAlign: "justify" }}>
                                    <li>ODP (Optical Distribution Point) merupakan titik distribusi ke arah pelanggan</li>
                                    <li>Terdapat Passive Splitter 1x8 yang displice langsung dengan core distribusi</li>
                                    <li>Jika menggunakan ODP 16 port maka diperlukan 2 Passive Splitter 1x8 dan dua core distribusi</li>
                                  </ol>
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

export default withStyles(blogPageStyle)(FTTHPage);
