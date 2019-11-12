import React from "react";
import axios from "axios";
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

import QuizSection from "./Section/QuizSection.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class QuizPage extends React.Component {
  constructor() {
    super();
    this.user = '';
    const profile = localStorage.getItem("auth") !== null && localStorage.getItem("auth") !== 'undefined' ? JSON.parse(localStorage.getItem("auth")) : "";
    if (profile !== "") {
      this.user = {
        name: profile.name,
        email: profile.email,
        givenName: profile.givenName,
        familyName: profile.familyName,
        imageUrl: profile.imageUrl
      }
    }
    this.timer = '';
    this.state = {
      activeQuestion: 0,
      answerID: '',
      duration: 0,
      quiz: [{
        id: '',
        question: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: ''
      }],
      quizTaken: false,
      selected: [false, false, false, false],
      score: [],
      startQuiz: false,
      startTime: ''
    }
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_SERVER_API + 'quiz')
      .then(res => {
        this.setState({ quiz: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  counting = () => {
    let duration = new Date().valueOf() - this.state.startTime;
    this.setState({
      duration: duration
    })
  }

  handleAnswer = (idx) => {
    var array = [false, false, false, false];
    array[idx] = true;
    this.setState({
      answerID: idx,
      selected: array
    })
  }

  handleSubmit = () => {
    const options = [this.state.quiz[this.state.activeQuestion].ans1, this.state.quiz[this.state.activeQuestion].ans2, this.state.quiz[this.state.activeQuestion].ans3, this.state.quiz[this.state.activeQuestion].ans4];
    const ans = options[this.state.selected.findIndex((value) => { return value === true })];
    var array = [false, false, false, false];
    if (ans === this.state.quiz[this.state.activeQuestion].ans1) {
      array[this.state.answerID] = "success";
      this.setState({
        score: [...this.state.score, '1'],
        selected: array
      })
    } else {
      array[this.state.answerID] = "danger";
      this.setState({
        score: [...this.state.score, '0'],
        selected: array
      })
    }
    if (this.state.activeQuestion === this.state.quiz.length - 1) {
      clearInterval(this.timer);
      setTimeout(this.lastQuestion, 1000);
    } else {
      setTimeout(this.nextQuestion, 1000);
    }
  }

  nextQuestion = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      selected: [false, false, false, false]
    })
  }

  lastQuestion = () => {
    const data = {
      username: this.user.name,
      email: this.user.email,
      course_id: "1",
      score: this.state.score.filter(val => val === "1").length,
      duration: this.state.duration
    }

    axios.post(process.env.REACT_APP_SERVER_API + 'score', data)
      .then(() => {
        this.setState({
          quizTaken: true,
          selected: [false, false, false, false]
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleStart = () => {
    this.setState({
      startQuiz: true,
      startTime: new Date().valueOf()
    })
    this.timer = setInterval(this.counting, 100);
  }

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
                <h1 className={classes.title}>Quiz</h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <QuizSection
          activeQuestion={this.state.activeQuestion}
          duration={this.state.duration}
          quiz={this.state.quiz[this.state.activeQuestion]}
          quizTaken={this.state.quizTaken}
          selected={this.state.selected}
          handleAnswer={this.handleAnswer}
          handleSubmit={this.handleSubmit}
          handleStart={this.handleStart}
          score={this.state.score.filter(val => val === "1").length}
          startQuiz={this.state.startQuiz}
        />
        <Footer />
      </div>
    );
  }
}

export default withStyles(blogPageStyle)(QuizPage);
