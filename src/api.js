import { mockEvents } from "./mock-events";

// This file acts as a placeholder for the real API for testing 'get a list of cities when user searches for Munich'

// receives query as its inpunt and returns mock data for a list of suggestions
async function getSuggestions(query) {
  return [
    {
      city: 'Munich',
      country: 'de',
      localized_country_name: 'Germany',
      name_string: 'Munich, Germany',
      zip: 'meetup3',
      lat: 48.14,
      lon: 11.58
    },
    {
      city: 'Munich',
      country: 'us',
      localized_country_name: 'USA',
      state: 'ND',
      name_string: 'Munich, North Dakota, USA',
      zip: '58352',
      lat: 48.66,
      lon: -98.85
    }

  ];

}

// function for getting the events

async function getEvents(lat, lon) {
  return mockEvents.events;
}

export { getSuggestions, getEvents };