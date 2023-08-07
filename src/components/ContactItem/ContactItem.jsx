import React from 'react';

class ContactItem extends React.Component {
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <li>
        {name}: {number}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default ContactItem;
