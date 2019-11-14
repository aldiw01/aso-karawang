import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import blogPageStyle from "assets/jss/material-kit-react/views/blogPage.jsx";

class QuizSection extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const {
      activeQuestion,
      classes,
      duration,
      noAnswer,
      quiz,
      quizTaken,
      selected,
      handleAnswer,
      handleSubmit,
      handleStart,
      score,
      startQuiz
    } = this.props;
    return (
      <React.Fragment>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              {quizTaken === true ?
                <div className={classes.section}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                      <h2 className={classes.subtitle}>
                        Your Score: {score}/20
                      </h2>
                      <h2 className={classes.subtitle}>
                        Duration: {Math.floor(duration / 60000) + ":" + Math.floor((duration / 1000) % 60) + ":" + Math.floor(duration / 100) % 10}
                      </h2>
                    </GridItem>
                  </GridContainer>
                </div>
                :
                startQuiz ?
                  <React.Fragment>
                    <GridContainer justify="center">
                      <GridItem xs={8}>
                        <h3 className={classes.indicators}>
                          {Math.floor(duration / 60000) + ":" + Math.floor((duration / 1000) % 60) + ":" + Math.floor(duration / 100) % 10 + " / 10:00:0"}
                        </h3>
                      </GridItem>
                      <GridItem xs={4}>
                        <h3 className={classes.indicators} style={{ float: "right" }}>
                          {activeQuestion + 1 + "/20"}
                        </h3>
                      </GridItem>
                    </GridContainer>
                    <div className={classes.section}>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                          <h2 className={classes.subtitle}>
                            {quiz.question}
                          </h2>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center" style={{ margin: "3rem auto" }}>
                        <GridItem xs={12} sm={12} md={8}>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={6}>
                              <Button
                                className={classes.options}
                                color={
                                  selected[noAnswer[0]] === "success" ? "success" :
                                    selected[noAnswer[0]] === "danger" ? "danger" :
                                      selected[noAnswer[0]] ? "info" :
                                        "github"
                                }
                                onClick={() => handleAnswer(noAnswer[0])}
                                style={{ whiteSpace: "normal", textTransform: "none" }}
                              >
                                {quiz.ans[noAnswer[0]]}
                              </Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6}>
                              <Button
                                className={classes.options}
                                color={
                                  selected[noAnswer[1]] === "success" ? "success" :
                                    selected[noAnswer[1]] === "danger" ? "danger" :
                                      selected[noAnswer[1]] ? "info" :
                                        "github"
                                }
                                onClick={() => handleAnswer(noAnswer[1])}
                                style={{ whiteSpace: "normal", textTransform: "none" }}
                              >
                                {quiz.ans[noAnswer[1]]}
                              </Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6}>
                              <Button
                                className={classes.options}
                                color={
                                  selected[noAnswer[2]] === "success" ? "success" :
                                    selected[noAnswer[2]] === "danger" ? "danger" :
                                      selected[noAnswer[2]] ? "info" :
                                        "github"
                                }
                                onClick={() => handleAnswer(noAnswer[2])}
                                style={{ whiteSpace: "normal", textTransform: "none" }}
                              >
                                {quiz.ans[noAnswer[2]]}
                              </Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6}>
                              <Button
                                className={classes.options}
                                color={
                                  selected[noAnswer[3]] === "success" ? "success" :
                                    selected[noAnswer[3]] === "danger" ? "danger" :
                                      selected[noAnswer[3]] ? "info" :
                                        "github"
                                }
                                onClick={() => handleAnswer(noAnswer[3])}
                                style={{ whiteSpace: "normal", textTransform: "none" }}
                              >
                                {quiz.ans[noAnswer[3]]}
                              </Button>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={6} md={3}>
                          <Button className={classes.options} color="rose" onClick={handleSubmit} >Next</Button>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </React.Fragment>
                  :
                  <div className={classes.section}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.subtitle}>
                          Do you really want to start the quiz?
                      </h2>
                      </GridItem>
                    </GridContainer>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={6} md={6}>
                        <Button className={classes.options} color="rose" onClick={handleStart} >Start</Button>
                      </GridItem>
                    </GridContainer>
                  </div>
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(blogPageStyle)(QuizSection);