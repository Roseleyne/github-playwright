import { expect, Locator, Page } from '@playwright/test';
import { SELECTORS } from '../utils/constants';

export class ResultsPage {
  readonly page: Page;
  readonly flightCards: Locator;
  readonly hotelCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flightCards = page.locator(SELECTORS.flights.card);
    this.hotelCards = page.locator(SELECTORS.hotels.card);
  }

  async validateFlightResults() {
    await expect(this.flightCards.first()).toBeVisible();
  }

  async validateHotelResults() {
    await expect(this.hotelCards.first()).toBeVisible();
  }
}
