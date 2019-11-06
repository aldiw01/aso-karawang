import React from "react";
import { connect } from "react-redux";
// utils
import Cookies from "../../utils/Cookies";
import { login } from "../../store/actions";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import GoogleLogin from 'react-google-login';

// assets
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import image from "assets/img/bg7.jpg";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: {
        value: "",
        errors: []
      },
      password: {
        value: "",
        errors: []
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    // this.googleAuth = new googleAuth();
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  handleInputChange(e) {
    const { name, value } = e.target;

    this.setState(state => ({ [name]: { ...this.state[name], value } }));
  }
  submitForm(e) {
    e.preventDefault();

    const user = {
      email: this.state.email.value,
      password: this.state.password.value
    }

    const url = 'http://localhost:3001/api/users/login';

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }), // body data type must match "Content-Type" header
    })
      .then(res => res.json())
      .then(data => {
        const { errors, user } = data;

        this.setState({ email: { ...this.state.email, errors: [] }, password: { ...this.state.password, errors: [] } })

        if (errors) {
          for (let name in errors) {
            const errorMessage = errors[name];

            this.setState(state => ({ [name]: { ...state[name], errors: [...state[name].errors, errorMessage] } }));
          }

          return;
        }

        if (user) {
          const { token, ...userData } = user;

          Cookies.create('token', token, null);

          this.props.dispatch(login(userData));
          this.props.history.push('/');
        }
      });
  }
  render() {
    const { classes, ...rest } = this.props;
    const responseGoogle = (response) => {
      localStorage.setItem('auth', JSON.stringify(response.profileObj));
      window.location.href = '/';
    }
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand={logo}
          brand2={logo2}
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form onSubmit={this.submitForm} className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        {/* <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button> */}

                        <GoogleLogin
                          clientId="49527778224-0ohjb04oiflj3q52av9c5m72n4rvd0ep.apps.googleusercontent.com"
                          buttonText="Login"
                          render={renderProps => (
                            <Button
                              justIcon
                              target="_blank"
                              color="transparent"
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                            >
                              <i className={"fab fa-google-plus-g"} />
                            </Button>
                          )}
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={'single_host_origin'}
                        />

                      </div>
                    </CardHeader>
                    <p className={classes.divider} style={{ marginBottom: "1rem" }}>We only provide login using google</p>
                    {/* <CardBody>
                      <CustomInput
                        labelText="Email..."
                        value={this.state.email.value}
                        errors={this.state.email.errors}
                        id="email"
                        name="email"
                        onChange={this.handleInputChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}

                      />
                      <CustomInput
                        labelText="Password"
                        value={this.state.password.value}
                        errors={this.state.password.errors}
                        id="pass"
                        name="password"
                        onChange={this.handleInputChange}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg">
                        Login
                      </Button>
                    </CardFooter> */}
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

const LoginPageContainer = connect(dispatch => ({ dispatch }))(LoginPage);

export default withStyles(loginPageStyle)(LoginPageContainer);