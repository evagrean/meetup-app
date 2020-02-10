// basic structure used to test React components

import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events';

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

describe('<App /> integration', () => {
  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    // function updateEvents() needs to be mocked, this is handled by jest.fn()
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    // handleClickedItem() must be called with a value!
    CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
    AppWrapper.unmount();
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }] });
    expect(AppWrapper.find('.Event')).toHaveLength(4);
    AppWrapper.unmount();
  });

});
