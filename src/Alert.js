// Base component
// Simple component that attempts to render text it receives from its props
// Uses style from its getStyle() function which defines a basic style for the color
import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

// Subclass InfoAlert
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}


// Subclass ErrorAlert

export { InfoAlert };