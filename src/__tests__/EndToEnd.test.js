import puppeteer from 'puppeteer';

describe('filter events by city', () => {

  test('When user hasn\'t searched for a city, show upcoming events based on the user\'s location by default', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    browser.close();


  });

  test('User should see a list of suggestions when they search for a city', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.waitForSelector('.CitySearch');
    await page.click('.city');
    await page.type('.city', 'Munich');
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
    browser.close();
  });

  test('User can select a city from the suggested list', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
    await page.click('.suggestions li');
    // simulate that value of searchbox is 'Munich' ?
    browser.close();
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

