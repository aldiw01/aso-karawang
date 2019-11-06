/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, Info, Home, Launch, Build, CastConnected } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

const Logout = props => (
  <ListItem className={props.classes.listItem}>
    <Button
      href=""
      color="transparent"
      target="_blank"
      onClick={() => { localStorage.removeItem("auth"); window.location.href = '/'; }}
      className={props.classes.navLink}>Logout</Button>
  </ListItem>
)

function HeaderLinks({ ...props }) {
  const { classes, user } = props;
  // const profile = JSON.parse(localStorage.getItem("auth")) || "";
  // var user = "";
  // if (profile !== "") {
  //   user = {
  //     name: profile.name,
  //     email: profile.email,
  //     givenName: profile.givenName,
  //     familyName: profile.familyName,
  //     imageUrl: profile.imageUrl
  //   }
  // }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="FTTH"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Home}
          dropdownList={[
            <Link to="/ftth" className={classes.dropdownLink}>
              Overview
            </Link>,
            <Link to="/ftth/pt" className={classes.dropdownLink}>
              Provisioning Type
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Provisioning"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Launch}
          dropdownList={[
            <Link to="/provisioning/wo" className={classes.dropdownLink}>
              Work Order
            </Link>,
            <Link to="/provisioning/tools" className={classes.dropdownLink}>
              IT Tools
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Assurance"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Build}
          dropdownList={[
            <Link to="/assurance/wo" className={classes.dropdownLink}>
              Work Order
            </Link>,
            <Link to="/assurance/tools" className={classes.dropdownLink}>
              IT Tools
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="WOC"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={CastConnected}
          dropdownList={[
            <Link to="/woc" className={classes.dropdownLink}>
              Overview
            </Link>,
            <Link to="/woc/provisioning" className={classes.dropdownLink}>
              HD Provisioning
            </Link>,
            <Link to="/woc/assurance" className={classes.dropdownLink}>
              HD Assurance
            </Link>,
            <Link to="/woc/logic" className={classes.dropdownLink}>
              HD Logic
            </Link>,
            <Link to="/woc/fallout" className={classes.dropdownLink}>
              HD Fallout
            </Link>,
            <Link to="/woc/maintenance" className={classes.dropdownLink}>
              HD Maintenance
            </Link>,
            <Link to="/woc/tdm" className={classes.dropdownLink}>
              HD TDM
            </Link>
          ]}
        />
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/component" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Info}
          dropdownList={[
            <Link to="/about/witel" className={classes.dropdownLink}>
              Witel Karawang
            </Link>,
            <Link to="/about/aso" className={classes.dropdownLink}>
              ASO Profile
            </Link>,
            <Link to="/about/developer" className={classes.dropdownLink}>
              Developer
            </Link>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to={user ? "" : "/login"}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            // style={{ color: 'white' }}
            className={classes.navLink}>{user ? `${user.name}` : `Login`}</Button>
        </Link>
      </ListItem>
      {
        user ? <Logout {...props} /> : ''
      }
    </List>
  );
}

const HeaderLinksContainer = connect(state => ({ state }))(HeaderLinks);

export default withStyles(headerLinksStyle)(HeaderLinksContainer);
