import React, { Component } from 'react';


class Event extends Component {

  state = {
    event: {},
    showDetails: false,
  }

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });

    }
    else {
      this.setState({ showDetails: false });
    }

  }




  render() {
    return (
      <div className="event">
        <div className="eventTime"></div>
        <div className="eventDate"></div>
        <div className="eventName">{this.state.event.name}</div>
        <div className="groupName"></div>
        <div className="yesRsvpCount"></div>
        {!this.state.showDetails &&
          <button className="showDetailsButton" onClick={() => this.handleShowDetails()}>Show Details</button>
        }
        {this.state.showDetails &&
          <button className="showLessButton" onClick={() => this.handleShowDetails()}>Show Less</button>
        }
        {this.state.showDetails ? <div className="details"></div> : null}


      </div>
    );
  }
}

export default Event;