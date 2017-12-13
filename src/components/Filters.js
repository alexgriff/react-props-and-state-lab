import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all'
    };
  }

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            value={this.state.filter}
            onChange={this.handleChange}
            name="type"
            id="type"
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            onClick={() => this.props.onChangeFilter(this.state.filter)}
            className="ui secondary button"
          >
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
