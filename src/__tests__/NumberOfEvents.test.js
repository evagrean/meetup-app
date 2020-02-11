import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render textbox element for number of events', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('render input label correctly', () => {
    expect(NumberOfEventsWrapper.find('label').text()).toBe('Specify number of events to show:');
  });

  test('render text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numberOfEvents);
  });

  test('render default number of 32 events', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

  test('change state when text input changes', () => {
    const eventObject = { target: { value: 12 } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(12);
  });

});

