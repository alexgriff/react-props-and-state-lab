import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

import { getAll } from '../data/pets';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    };
  }

  componentDidMount() {
    this.setState({ pets: getAll() });
  }

  changeFilter = type => {
    const updatedFilter = { type: type };
    this.setState({ filters: updatedFilter });
  };

  adoptPet = pet => {
    this.setState(prevState => ({
      adoptedPets: [...prevState.adoptedPets, pet.id]
    }));
  };

  render() {
    console.log('App is rendering', this.state);

    const filteredPets = this.state.pets
      .filter(pet => {
        if (this.state.filters.type === 'all') {
          return true;
        } else {
          return pet.type === this.state.filters.type;
        }
      })
      .map(pet => {
        return {
          ...pet,
          isAdopted: this.state.adoptedPets.includes(pet.id)
        };
      });

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                initialFilter={this.state.filters.type}
                onChangeFilter={this.changeFilter}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptClick={this.adoptPet} pets={filteredPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
