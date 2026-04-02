import { expect, Locator, Page } from '@playwright/test';
import { SELECTORS } from '../utils/constants';

export class HomePage {
  readonly page: Page;
  readonly flightTab: Locator;
  readonly hotelTab: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flightTab = page.locator(SELECTORS.tabs.flights);
    this.hotelTab = page.locator(SELECTORS.tabs.hotels);
    this.searchButton = page.locator(SELECTORS.buttons.search);
  }

  async open() {
    await this.page.goto('/');
  }

  async validateHomeLoaded() {
    await expect(this.searchButton).toBeVisible();
  }

  async goToFlights() {
    await this.flightTab.click();
  }

  async goToHotels() {
    await this.hotelTab.click();
  }
}
