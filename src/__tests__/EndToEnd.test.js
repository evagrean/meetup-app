import puppeteer from 'puppeteer';
import { mockEvents } from '../mock-events';

describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
    await page.waitForSelector('.CitySearch');


  });
  afterAll(() => {
    browser.close();
  });

  test('When user hasn\'t searched for a city, show upcoming events based on the user\'s location by default', async () => {
    const defaultList = await page.$('.Event');
    expect(defaultList).toBeDefined();
  }, 10000);

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.click('.city');
    await page.type('.city', 'Munich');
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
  });

  test('User can select a city from the suggested list', async () => {

    // const suggestions = await page.$('.suggestions');
    // expect(suggestions).toBeDefined();
    // await page.click('.suggestions li');

    // do I have to simulate that value of searchbox is 'Munich' ?

  });
});


describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });
  afterAll(() => {
    browser.close();

  });

  test('An event element is collapsed by default', async () => {
    const details = await page.$('.Event .details');
    expect(details).toBeNull();

  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .showDetailsButton');

    const details = await page.$('.Event .details');
    expect(details).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .showLessButton');

    const details = await page.$('.Event .details');
    expect(details).toBeNull();
  });
});

