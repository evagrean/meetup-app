import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme'
import App from '../App';
import { mockEvents } from '../mock-events';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, and, when, then }) => {
    let AppWrapper;
    given('User has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    and('List of Events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });

    when('User did not expand any event', () => {

    });

    then('All event elements should be collapsed', () => {
      expect(AppWrapper.find('.details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('User has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    and('List of Events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });

    when('User clicks on details button for an event', () => {
      AppWrapper.find('.Event .showDetailsButton').at(0).simulate('click')
    });

    then('Event element will be expanded to show more details about the event', () => {
      expect(AppWrapper.find('.details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('User has opened the app', () => {
      AppWrapper = mount(<App />);
    });

    and('User has expanded event\'s details', () => {
      AppWrapper.update();
      AppWrapper.find('.Event .showDetailsButton').at(0).simulate('click');
      expect(AppWrapper.find('.Event .details')).toHaveLength(1);
    });

    when('User clicks on show less button for an event', () => {
      AppWrapper.find('.Event .showLessButton').at(0).simulate('click');
    });

    then('Event element should be collapsed, details should be hidden', () => {
      expect(AppWrapper.find('.details')).toHaveLength(0);


    });
    and('User should only see list of events', () => {
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
  });

});