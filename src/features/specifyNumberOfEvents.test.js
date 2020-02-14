import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme'
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('User has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    when('User didn\'t change default number of events', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });

    then('32 events should be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event').length).toBeLessThanOrEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, and, when, then }) => {
    let AppWrapper
    given('User has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    and('Default number of events should be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event').length).toBeLessThanOrEqual(32);
    });

    when('User types desired number of events in textbox', () => {
      AppWrapper.find('.number').simulate('change', { target: { value: 15 } });
    });

    then('Desired number of events should be displayed', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(15);
    });
  });

});