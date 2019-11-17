import React from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import QuizSection from "./Section/QuizSection.jsx";

import logo from "assets/img/telkom.png";
import logo2 from "assets/img/telkomrev.png";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class QuizPage extends React.Component {
  constructor() {
    super();
    this.noAnswer = [];
    for (var i = 0; i < 4; i++) {
      this.noAnswer[i] = i;
    }
    this.noQuestion = [];
    for (i = 0; i < 20; i++) {
      this.noQuestion[i] = i;
    }
    this.noQuestion = this.shuffle(this.noQuestion);
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
      noAnswer: this.shuffle(this.noAnswer),
      noQuestion: this.noQuestion,
      quiz: [{
        id: '',
        question: '',
        ans: ''
      }],
      quizTaken: false,
      selected: [false, false, false, false],
      score: [],
      startQuiz: false,
      startTime: '',
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

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  counting = () => {
    let duration = new Date().valueOf() - this.state.startTime;
    this.setState({
      duration: duration
    })
    if (duration > 600000) {
      this.setState({
        quizTaken: true
      })
      clearInterval(this.timer);
      setTimeout(this.lastQuestion, 1000);
    }
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
    const options = [this.state.quiz[this.state.activeQuestion].ans[0]];
    const ans = options[this.state.selected.findIndex((value) => { return value === true })];
    var array = [false, false, false, false];
    if (ans === this.state.quiz[this.state.activeQuestion].ans[0]) {
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
      noAnswer: this.shuffle(this.noAnswer),
      selected: [false, false, false, false]
    })
  }

  lastQuestion = () => {
    const data = {
      username: this.user.name,
      email: this.user.email,
      imageUrl: this.user.imageUrl,
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
    return (
      <div>
        <Header
          color="transparent"
          brand={logo}
          brand2={logo2}
          // rightLinks={<HeaderLinks />}
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
          noAnswer={this.state.noAnswer}
          quiz={this.state.quiz[this.state.noQuestion[this.state.activeQuestion]]}
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
