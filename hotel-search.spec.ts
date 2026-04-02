import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { HotelSearchPage } from '../../pages/HotelSearchPage';
import hotelData from '../../fixtures/hotelData.json';

test.describe('Hotel Search', () => {
  test('should search hotels successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const hotelPage = new HotelSearchPage(page);

    await homePage.open();
    await homePage.validateHomeLoaded();
    await homePage.goToHotels();

    await hotelPage.fillHotelSearch(hotelData.validSearch);
    await hotelPage.search();

    await hotelPage.validateResultsVisible();
  });
});
