import React, { Component } from 'react';
import Heading from './Components/Heading';
import Park from './Components/Park';
import Buttons from './Components/Buttons';
import species from './data/species';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dinos: [],
      currentSpecies: species[0].name,
      numberOfDinos: 0,
    };

    this.addDino = this.addDino.bind(this);
    this.getNewSpecies = this.getNewSpecies.bind(this);
    this.resetPark = this.resetPark.bind(this);
  }

  addDino() {
    const newSpecie = species.find(
      ({ name }) => name === this.state.currentSpecies
    );
    this.setState((st) => {
      return {
        dinos: [...st.dinos.slice(), newSpecie],
        numberOfDinos: st.numberOfDinos + 1,
      };
    });
  }

  getNewSpecies() {
    let newSpecie;
    do {
      newSpecie = species[Math.floor(Math.random() * species.length)];
    } while (this.state.currentSpecies === newSpecie.name);

    this.setState(() => {
      return { currentSpecies: newSpecie.name };
    });
  }

  resetPark() {
    this.setState({
      currentSpecies: species[0].name,
      numberOfDinos: 0,
      dinos: [],
    });
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <Buttons
          addDino={this.addDino}
          getNewSpecies={this.getNewSpecies}
          resetPark={this.resetPark}
        />
        <p>Current dinosaur species: {this.state.currentSpecies}</p>
        <p>Number of dinosaurs in park: {this.state.numberOfDinos}</p>
        <Park dinos={this.state.dinos} />
      </div>
    );
  }
}

export default App;
