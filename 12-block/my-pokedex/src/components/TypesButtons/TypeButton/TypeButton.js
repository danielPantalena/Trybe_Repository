import React from 'react';

class TypeButton extends React.Component {
  render() {
    const { type, handleClick } = this.props;
    return <button onClick={() => handleClick(type)}>{type}</button>;
  }
}

export default TypeButton;
