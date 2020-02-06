import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event container correctly', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event time container correctly', () => {
    expect(EventWrapper.find('.eventTime')).toHaveLength(1);
  });

  test('render event date container correctly', () => {
    expect(EventWrapper.find('.eventDate')).toHaveLength(1);
  });

  test('render event name container correctly', () => {
    expect(EventWrapper.find('.eventName')).toHaveLength(1);
  });

  test('render event group name container correctly', () => {
    expect(EventWrapper.find('.groupName')).toHaveLength(1);
  });

  test('render number of people going container correctly', () => {
    expect(EventWrapper.find('.yesRsvpCount')).toHaveLength(1);
  });

  test('render showDetails button', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    expect(EventWrapper.find('.showDetailsButton')).toHaveLength(1);
  });

  test('render showLess button', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find('.showLessButton')).toHaveLength(1);

  });

  test('expand event details when showDetails button is clicked', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.showDetailsButton').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('collapse event details when showLess button is clicked', () => {
    EventWrapper.setState({
      showDetails: true
    });
    EventWrapper.find('.showLessButton').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(false);

  });

  test('render details container when showDetails set to true', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.exists('.details');
  });

  test('test correct rendering of event info with mock data', () => {
    EventWrapper.setState({
      event: {
        created: 1529409410000,
        duration: 10800000,
        id: "tmqvvpybcdbbc",
        name: "Berlin.JS",
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1582221600000,
        local_date: "2020-02-20",
        local_time: "19:00",
        updated: 1529409410000,
        utc_offset: 3600000,
        waitlist_count: 0,
        yes_rsvp_count: 79,
        venue: {
          id: 17792592,
          name: "Berlin Coworking Space - co.up",
          lat: 52.50046157836914,
          lon: 13.418904304504395,
          repinned: false,
          address_1: "Adalbertstraße 7 - 8, 10999 Berlin",
          city: "Berlin",
          country: "de",
          localized_country_name: "Germany"
        },
        group: {
          created: 1447920165000,
          name: "Berlin.JS",
          id: 19136067,
          join_mode: "open",
          lat: 52.52000045776367,
          lon: 13.380000114440918,
          urlname: "Berlin-JS",
          who: "Berlin JavaScripters",
          localized_location: "Berlin, Germany",
          state: "",
          country: "de",
          region: "en_US",
          timezone: "Europe / Berlin"
        },
        link: "https://www.meetup.com/Berlin-JS/events/tmqvvpybcdbbc/",
        description: "<p>About the meetup:</p> <p>Please check berlinjs.org (<a href=\"http://berlinjs.org/\" class=\"linkified\">http://berlinjs.org/</a>) for up-to-date info about the talks we have scheduled for the upcoming event! If there's an open slot, consider making a pull-request to give a talk yourself, or encourage a friend to do the same :)</p> <p>Please get in touch with any of the organizers with any questions you have. We welcome a diverse range of topics that are related in any way to JavaScript and the community around it. New speakers, experienced speakers, and everyone in between. If you have an idea you aren't sure about, just reach out.</p> <p>Drinks can be purchased at 2 euro. There is a small selection of non-alcoholic beverages and beer to choose from.</p> <p>Our Commitment to a Code of Conduct:</p> <p>Our goal is to have an awesome, inclusive and safe community meetup where people meet, hang out together, chat, listen to talks, exchange ideas and make new friends. Any harmful or discriminating behavior will not be tolerated and results in the offending person being expelled from the meetup.</p> <p>For details on what kinds of behavior are not tolerated and consequences for violating these rules, we refer to the Berlin Code of Conduct (<a href=\"http://rubyberlin.github.io/code-of-conduct\" class=\"linkified\">http://rubyberlin.github.io/code-of-conduct</a>).</p> <p>Keep in touch:</p> <p>on twitter: @BerlinJS (<a href=\"https://twitter.com/berlinjs\" class=\"linkified\">https://twitter.com/berlinjs</a>)</p> <p>on the web: berlinjs.org (<a href=\"http://berlinjs.org/\" class=\"linkified\">http://berlinjs.org/</a>)</p> <p>on foursquare: Berlin.JS (<a href=\"http://4sq.com/1K5KgAT\" class=\"linkified\">http://4sq.com/1K5KgAT</a>)</p> <p>Detailed Directions:</p> <p>co.up is located closest to the Kottbusser Tor U-bahn station (U8 &amp; U1).</p> <p>Please note that there are two entrances to the hof where co.up is located. If one gate is closed, the other should be open.</p> <p>If you're attending for the first time, check out the map below.</p> <p><img src=\"http://photos3.meetupstatic.com/photos/event/6/0/f/8/600_444324824.jpeg\" /></p> <p>About our supporters:</p> <p>We are so grateful to be hosted by the wonderful co.up coworking space (<a href=\"http://co-up.de/\" class=\"linkified\" > http://co-up.de/</a>) each month at no cost. Therefore, we ask if you enjoy our meetups, please consider supporting co.up's generosity by helping fund upgrades and renovations with a small donation in the jar near the fridge.</p> <p>If you need a coworking space, consider joining co.up!</p> ",
        how_to_find_us: "Ring the bell for co.up 3rd floor, then come up to the 3rd floor.",
        visibility: "public",
        member_pay_fee: false
      }
    });
    expect(EventWrapper.state('event').name).toBe('Berlin.JS')
  });

});