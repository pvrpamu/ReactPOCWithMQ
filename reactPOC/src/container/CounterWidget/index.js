import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { counterWidget } from "../../constants/counterWidget";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from "../../actions/counter-widget-actions";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class CounterWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onInc = () => {
    this.props.increaseCounter(1);
  };

  onDec = () => {
    this.props.decreaseCounter(1);
  };

  onReset = () => {
    this.props.resetCounter();
  };

  render() {
    return (
      <div className="example w-100 my-5">
        <Container>
          <Link to="/home" className="text-white  ">{counterWidget.homePage}</Link>
          <Row>
            <Col sm>
              <b><span className="text-white">{this.props.value}</span></b>
            </Col>
            <Col sm>
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => this.onInc()}
              >
                {counterWidget.add}
              </Button>
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => this.onDec()}
              >
                {counterWidget.sub}
              </Button>
            </Col>
            <Col sm>
              <Button
                variant="primary"
                className="my-sm-2 my-2 my-md-0 my-lg-0"
                onClick={() => this.onReset()}
              >
                {counterWidget.reset}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { value: state.counterwidget.value };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { increaseCounter, decreaseCounter, resetCounter },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterWidget);
