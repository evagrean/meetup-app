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
    this.color = 'lightblue';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: 'italic',
      marginBottom: '10px',
      minHeight: '30.2px'
    }
  }
}


// Subclass ErrorAlert
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#e42c64';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: 'italic',
      marginTop: '10px',
      minHeight: '30.2px',
    }
  }
}

// Subclass WarningAlert
class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#f8f8ff'
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: bold,
    }
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };