import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// mapStateToProps gives props the ability to mimic state's values.
const mapStateToProps = (state) => {
    return { items: state.items }
}

// connect listens to all changes in state. When a change occurs it calls the function mapStateToProps. Within mapStateToProps, it is specified which part of state is available to props.
export default connect (mapStateToProps)(App);
