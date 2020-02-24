import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api.js';


class App extends Component {


  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    infoText: '',
    errorText: '',
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => this.setState({ events, lat, lon }));
    } if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events, page }));
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events => this.setState({ events }));
    }
  }
  // default: show events based on user's location
  componentDidMount() {
    this.updateEvents(null, null);

  }

  render() {
    return (
      <div className="App">
        <h1>GetTogether</h1>
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} />
        <p className="about">Project for <a href="https://careerfoundry.com/en/courses/become-a-web-developer/" target="_blank" rel="noopener noreferrer">CareerFoundry</a> Full-Stack Immersion Course. Coded by <a href="https://github.com/evagrean" target="_blank" rel="noopener noreferrer">Eva Greiner-Anzenbacher</a></p>
      </div>
    );
  }
}

export default App;
