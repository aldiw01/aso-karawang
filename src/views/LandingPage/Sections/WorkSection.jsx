import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes, feed, handleChange, handleSubmit, selectedRating } = this.props;
    const radioStyle = {
      margin: "0"
    }
    const radioStyleLeft = {
      margin: "0 0 0 1rem"
    }
    const radioStyleRight = {
      margin: "0 1rem 0 0"
    }
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Give your feedback</h2>
            <h4 className={classes.description}>
              This website is under development, feel free to contact me for question, feedback, suggestion or business inquiry.
            </h4>
            <form>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    name="name"
                    value={feed.name || ""}
                    onChange={handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    name="email"
                    value={feed.email || ""}
                    onChange={handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      <strong>
                        Rate this website *
                      </strong>
                    </FormLabel>
                    <RadioGroup aria-label="position" name="rating" value={selectedRating} onChange={handleChange} row>
                      <FormControlLabel
                        value="Nightmare"
                        control={<Radio color="primary" style={{ display: "none" }} />}
                        label="Nightmare"
                        labelPlacement="start"
                        disabled
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio color="primary" />}
                        label="1"
                        labelPlacement="bottom"
                        style={radioStyleLeft}
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio color="primary" />}
                        label="2"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio color="primary" />}
                        label="3"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio color="primary" />}
                        label="4"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="5"
                        control={<Radio color="primary" />}
                        label="5"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="6"
                        control={<Radio color="primary" />}
                        label="6"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="7"
                        control={<Radio color="primary" />}
                        label="7"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="8"
                        control={<Radio color="primary" />}
                        label="8"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="9"
                        control={<Radio color="primary" />}
                        label="9"
                        labelPlacement="bottom"
                        style={radioStyle}
                      />
                      <FormControlLabel
                        value="10"
                        control={<Radio color="primary" />}
                        label="10"
                        labelPlacement="bottom"
                        style={radioStyleRight}
                      />
                      <FormControlLabel
                        value="Wonderful"
                        control={<Radio color="primary" style={{ display: "none" }} />}
                        label="Wonderful"
                        labelPlacement="end"
                        disabled
                      />
                    </RadioGroup>
                  </FormControl>
                </GridItem>

                <CustomInput
                  labelText="Your Message *"
                  id="message"
                  name="message"
                  value={feed.message || ""}
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    className={classes.textCenter}
                  >
                    <Button color="danger" onClick={handleSubmit} >Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
