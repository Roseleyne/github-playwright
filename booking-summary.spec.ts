import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { FlightSearchPage } from '../../pages/FlightSearchPage';
import { BookingPage } from '../../pages/BookingPage';
import flightData from '../../fixtures/flightData.json';

test.describe('Booking Summary', () => {
  test('should display booking summary after selecting a flight', async ({ page }) => {
    const homePage = new HomePage(page);
    const flightPage = new FlightSearchPage(page);
    const bookingPage = new BookingPage(page);

    await homePage.open();
    await homePage.goToFlights();
    await flightPage.fillFlightSearch(flightData.validSearch);
    await flightPage.search();
    await flightPage.validateResultsVisible();
    await flightPage.selectFirstResult();

    await bookingPage.validateSummaryLoaded();
  });
});
