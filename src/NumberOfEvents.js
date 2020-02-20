import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    errorText: '',
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    if (value <= 0) {
      this.setState({
        errorText: 'Number should be at least 1',
      });
    } else {
      this.setState({
        errorText: '',
      });

    }
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="NumberOfEvents">

        <label><h4>Specify number of events:</h4></label>
        <input type="text" className="number" value={this.state.numberOfEvents} onChange={this.handleInputChanged} />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;