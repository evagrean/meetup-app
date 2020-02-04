import React, { Component } from 'react';


class Event extends Component {

  state = {
    event: {},
    showDetails: false,
  }

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  }


  render() {
    return (
      <div className="event">
        <div className="eventTime"></div>
        <div className="eventDate"></div>
        <div className="eventName">{this.state.event.name}</div>
        <div className="groupName"></div>
        <div className="yesRsvpCount"></div>
        <button className="detailsButton" onClick={() => this.handleShowDetails()}>Details</button>
      </div>
    );
  }
}

export default Event;