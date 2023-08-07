import React from 'react';

class Filter extends React.Component {
  handleChange = e => {
    this.props.onFilterChange(e.currentTarget.value);
  };

  render() {
    const { filter } = this.props;
    return <input type="text" value={filter} onChange={this.handleChange} />;
  }
}

export default Filter;
