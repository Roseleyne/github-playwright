import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { FlightSearchPage } from '../../pages/FlightSearchPage';

test.describe('Negative Scenarios', () => {
  test('should show error when required flight fields are empty', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightSearchPage(page);

    await homePage.open();
    await homePage.goToFlights();
    await flightPage.search();

    await flightPage.validateErrorVisible();
  });

  test('should show error for invalid return date', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightSearchPage(page);

    await homePage.open();
    await homePage.goToFlights();

    await flightPage.fillFlightSearch({
      origin: 'São Paulo',
      destination: 'Rio de Janeiro',
      departureDate: '2026-05-20',
      returnDate: '2026-05-10',
      passengers: '1'
    });

    await flightPage.search();
    await flightPage.validateErrorVisible();
  });
});
