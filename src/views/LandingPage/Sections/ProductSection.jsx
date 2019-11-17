import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import ImportantDevices from "@material-ui/icons/ImportantDevices";
import Palette from "@material-ui/icons/Palette";
import Assessment from "@material-ui/icons/Assessment";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Mission Statement</h2>
            <h5 className={classes.description}>
              Situs Pedoman WOC Witel Karawang sebagai One stop point untuk pedoman ASO di Witel Karawang dalam rangka transformasi digital di Telkom Group. Untuk mencapai tujuan tersebut kami mengusung 3 buah poin yaitu:
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Anywhere Anytime"
                description="Dapat diakses dimana saja dan kapan saja selama terhubung ke internet, serta kompatibel dengan device apapun."
                icon={ImportantDevices}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Great Design"
                description="Dibangun dengan desain menarik dan waktu loading halaman yang cepat untuk mendapatkan experience memuaskan."
                icon={Palette}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Gamification"
                description="Dilengkapi dengan gamifikasi sehingga lebih menarik dan sebagai evaluasi proses pembelajaran."
                icon={Assessment}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
