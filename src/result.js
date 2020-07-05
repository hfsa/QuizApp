import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  render() {
    var reviewArr = this.props.qstn.map(item => {
      if (item.attended) {
        if (item.answer) {
          return (
            <div className="card border-success mb-3" key={item.questionTypeId}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      checked={item.options[0].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[0].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    <input
                      type="radio"
                      checked={item.options[1].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[1].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    <input
                      type="radio"
                      checked={item.options[2].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[2].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    <input
                      type="radio"
                      checked={item.options[3].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[3].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <h6 className="text-success">Right Answer</h6>
              </div>
            </div>
          );
        } else {
          return (
            <div className="card border-danger mb-3" key={item.questionTypeId}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div>
                  <label>
                    <input
                      type="radio"
                      checked={item.options[0].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[0].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    <input
                      type="radio"
                      checked={item.options[1].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[1].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    <input
                      type="radio"
                      checked={item.options[2].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[2].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    <input
                      type="radio"
                      checked={item.options[3].name === item.selectedAnswer}
                      readOnly
                    />
                    {item.options[3].name}
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <h6 className="text-danger">Wrong Answer</h6>
              </div>
            </div>
          );
        }
      } else {
        return (
          <div className="card border-warning mb-3" key={item.questionTypeId}>
            <div className="card-body">
              <h5 className="card-title">
                {item.questionTypeId}. {item.name}
              </h5>
              <div>
                <label>
                  <input
                    type="radio"
                    checked={item.options[0].name === item.selectedAnswer}
                    readOnly
                  />
                  {item.options[0].name}
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                  <input
                    type="radio"
                    checked={item.options[1].name === item.selectedAnswer}
                    readOnly
                  />
                  {item.options[1].name}
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                  <input
                    type="radio"
                    checked={item.options[2].name === item.selectedAnswer}
                    readOnly
                  />
                  {item.options[2].name}
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                  <input
                    type="radio"
                    checked={item.options[3].name === item.selectedAnswer}
                    readOnly
                  />
                  {item.options[3].name}
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <h6 className="text-warning">Question Not Attempted</h6>
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
            <h1 style={{ textAlign: "center" }}>Quiz Result</h1>
            <hr />
            <div style={{ overflowY: "scroll", height: "550px" }}>
              {reviewArr}
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

export default connect(mapToProps)(Result);
