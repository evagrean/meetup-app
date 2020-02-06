// basic structure used to test React components

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

// new group called <App /> component has been created via describe() function
describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  // first test: default list of events when user opens app
  test('render list of events', () => { // test description
    expect(AppWrapper.find(EventList)).toHaveLength(1); // calling the shallow-rendered App component within the test
  });

  // second test: list of citys that match textbox input
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })

});
