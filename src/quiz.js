import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./quiz.css";

class Quiz extends React.Component {
  state = {
    choseAnswer: false,
    selectedAnswer: ""
  };

  onSubmit = () => {
    alert("Want to submit for sure?");
  };
  onSubmitAnswer = e => {
    this.props.next();
    alert(
      "The Correct Answer is: " +
        e +
        " You selected: " +
        this.state.selectedAnswer
    );
    this.setState({ choseAnswer: false });
  };
  onSelectAnswer = e => {
    this.props.handleChange(e);
    this.setState({ choseAnswer: true, selectedAnswer: e.target.value });
  };
  onShowAnswer = answer => {
    alert("The correct Answer is: " + answer);
  };
  render() {
    let correctAnswer = this.props.qstn[this.props.qstnNo.number].actualAnswer;
    var arr = this.props.qstn[this.props.qstnNo.number].options.map(item => {
      return item.name;
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2" />
          <div className="col">
            <h1 className="QstnHeading">Celegence Quiz</h1>
            <hr />
            <span style={{ backgroundColor: "#1e88e5", color: "white" }}>
              <b>
                &nbsp;Question{" "}
                {this.props.qstn[this.props.qstnNo.number].questionTypeId} of
                10&nbsp;
              </b>
            </span>
            <br />
            <br />
            <div className="QuizBox">
              <h4>{this.props.qstn[this.props.qstnNo.number].name}</h4>
              <div className="QuizOutput">
                {arr.map(item => {
                  return (
                    <label key={Math.random()}>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        className="OptionsStyle"
                        type="radio"
                        name="ans"
                        onChange={this.onSelectAnswer}
                        checked={
                          item ===
                          this.props.qstn[this.props.qstnNo.number]
                            .selectedAnswer
                        }
                        value={item}
                        id={
                          this.props.qstn[this.props.qstnNo.number]
                            .questionTypeId
                        }
                      />
                      {item}
                    </label>
                  );
                })}
              </div>
            </div>
            <hr />
            <div className="buttons">
              <button
                className="btn btn-light"
                onClick={this.props.prev}
                disabled={this.props.qstnNo.number === 0}
              >
                Previous{" "}
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-light"
                onClick={() => this.onSubmitAnswer(correctAnswer)}
                disabled={this.state.choseAnswer === false ? true : false}
              >
                Submit Answer
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-light"
                onClick={this.props.next}
                disabled={this.props.qstnNo.number === 9}
              >
                Next
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-light"
                onClick={() => this.onShowAnswer(correctAnswer)}
              >
                Show Answer
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <hr />
            <div style={{ textAlign: "center", paddingTop: "100px" }}>
              <Link className="btn btn-info btn-lg" to="/quiz/review">
                Review
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                className="btn btn-info btn-lg"
                to="/quiz/result"
                onClick={() => this.onSubmit()}
              >
                Result
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <div className="col-2" />
        </div>
      </div>
    );
  }
}

const mapToProps = state => {
  console.log(state, "in map to prpps");
  return {
    qstn: state.Ques,
    qstnNo: state.QuesNo,
    attended: state.attended
  };
};

const mapToDispatch = dispatch => {
  return {
    first: () => dispatch({ type: "FIRST" }),
    next: () => dispatch({ type: "NEXT" }),
    prev: () => dispatch({ type: "PREV" }),
    last: () => dispatch({ type: "LAST" }),
    handleChange: event =>
      dispatch({
        type: "CHANGE",
        value: event.target.value,
        id: event.target.id
      })
  };
};

export default connect(
  mapToProps,
  mapToDispatch
)(Quiz);
