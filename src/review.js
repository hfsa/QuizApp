import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Review extends React.Component {
  onSubmit = () => {
    alert("Are you Sure?");
  };
  render() {
    var resultArr = this.props.qstn.map(item => {
      if (item.attended) {
        return (
          <div className="card bg-primary w-100" key={Math.random()}>
            <div className="card-body">
              <p className="card-text">{item.questionTypeId}. Answered</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className="card bg-warning w-100" key={Math.random()}>
            <div className="card-body">
              <p className="card-text">{item.questionTypeId}. Not Answered</p>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2" />
          <div className="col custom">
            <h1 style={{ textAlign: "center" }}>Quiz Review</h1>
            <hr />
            <div className="card-columns justify-content-end">
              <span>{resultArr}</span>
            </div>
            <div style={{ textAlign: "center", paddingTop: "100px" }}>
              <Link className="btn btn-info btn-lg" to="/">
                Quiz
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
  return {
    qstn: state.Ques,
    qstnNo: state.QuesNo
  };
};

export default connect(mapToProps)(Review);
