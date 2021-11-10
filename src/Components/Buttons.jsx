import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.getNewSpecies}>Research New Species</button>
        <button onClick={this.props.addDino}>Add Dinosaur To Park</button>
        <button onClick={this.props.resetPark}>Destroy Park</button>
      </div>
    );
  }
}
