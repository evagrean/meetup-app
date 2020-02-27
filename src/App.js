import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';
import moment from 'moment';


class App extends Component {


  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    warningText: '',
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({ warningText: 'You are currently offline. Events have been loaded from your last session' });
    } else {
      this.setState({ waringText: '' });
    }

    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => this.setState({ events, lat, lon }));
    } if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => this.setState({ events, page }));
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events => this.setState({ events }));
    }
  }

  countEventsonDate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const count = this.countEventsonDate(dateString);
      next7Days.push({ date: dateString, number: count });
    }
    return next7Days;
  }

  // default: show events based on user's location
  componentDidMount() {
    this.updateEvents(null, null);

  }

  render() {
    return (
      <div className="App">
        <h1>GetTogether</h1>
        <WarningAlert text={this.state.warningText} />
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} />
        <p className="about">Project for <a href="https://careerfoundry.com/en/courses/become-a-web-developer/" target="_blank" rel="noopener noreferrer">CareerFoundry</a> Full-Stack Immersion Course. Coded by <a href="https://github.com/evagrean" target="_blank" rel="noopener noreferrer">Eva Greiner-Anzenbacher</a></p>
      </div>
    );
  }
}

export default App;
