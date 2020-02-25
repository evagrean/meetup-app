import React, { Component } from 'react';


class Event extends Component {


  state = {
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
    const { event } = this.props;

    return (

      <div className="Event">
        <div className="event-time">{event.local_date} | {event.local_time}</div>
        <div className="event-name">{event.name}</div>
        <div className="group-name">{event.group.name}</div>
        <div className="going"> {event.yes_rsvp_count} People are going</div>
        {!this.state.showDetails &&
          <button className="showDetailsButton" onClick={() => this.handleShowDetails()}>Details</button>
        }
        {this.state.showDetails &&

          < button className="showLessButton" onClick={() => this.handleShowDetails()}>Show Less</button>
        }
        {this.state.showDetails ? <div className="details" dangerouslySetInnerHTML={{ __html: event.description }}></div> : null}


      </div >
    );
  }
}

export default Event;