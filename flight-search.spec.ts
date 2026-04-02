import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { FlightSearchPage } from '../../pages/FlightSearchPage';
import flightData from '../../fixtures/flightData.json';
import { parsePrice } from '../../utils/helpers';

test.describe('Flight Search', () => {
  test('should search for flights successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightSearchPage(page);

    await homePage.open();
    await homePage.validateHomeLoaded();
    await homePage.goToFlights();

    await test.step('Fill flight search form', async () => {
      await flightPage.fillFlightSearch(flightData.validSearch);
    });

    await test.step('Submit search', async () => {
      await flightPage.search();
    });

    await test.step('Validate results are displayed', async () => {
      await flightPage.validateResultsVisible();
    });
  });

  test('should sort flights by lower price', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightSearchPage(page);

    await homePage.open();
    await homePage.goToFlights();
    await flightPage.fillFlightSearch(flightData.validSearch);
    await flightPage.search();
    await flightPage.validateResultsVisible();

    const firstPrice = parsePrice(await flightPage.getFirstFlightPrice());
    const secondPrice = parsePrice(await flightPage.getSecondFlightPrice());

    expect(firstPrice).toBeLessThanOrEqual(secondPrice);
  });
});
