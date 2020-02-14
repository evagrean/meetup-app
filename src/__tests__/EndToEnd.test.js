import puppeteer from 'puppeteer';

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