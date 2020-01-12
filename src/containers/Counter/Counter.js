import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from '../../store/actions';
import './counter.css';
class Counter extends Component {
  // state = {
  //   counter: 0
  // };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add +5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Sub -5"
          clicked={this.props.onSubstractCounter}
        />
        <hr />

        <div className="storeResult">
        <button className="button" onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        </div>
        
        <ul className="listStyle">
          {this.props.storedResults.map(strResult => (
            <li className="listItem" key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};
const mapDsipatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubstractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT , result: result}),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElmntId: id })
  };
};

export default connect(mapStateToProps, mapDsipatchToProps)(Counter);
