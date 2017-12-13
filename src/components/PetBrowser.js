import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(pet => (
      <Pet onAdoptClick={this.props.onAdoptClick} pet={pet} key={pet.id} />
    ));
    return <div className="ui cards">{pets}</div>;
  }
}

export default PetBrowser;
