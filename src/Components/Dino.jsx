import React, { Component } from 'react';

export default class Dino extends Component {
  render() {
    return (
      <div className="dino-card">
        <div>Dinosaur: {this.props.name}</div>
        <img src={this.props.src} alt={this.props.name}></img>
      </div>
    );
  }
}
