import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Dino from './Dino';

export default class Park extends Component {
  render() {
    const dinos = this.props.dinos.map((dino) => (
      <Dino src={dino.image} name={dino.name} key={uuid()} />
    ));
    return <div className="dino-grid">{dinos}</div>;
  }
}
