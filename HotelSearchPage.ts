import { expect, Locator, Page } from '@playwright/test';
import { SELECTORS } from '../utils/constants';

type HotelSearchData = {
  city: string;
  checkinDate: string;
  checkoutDate: string;
  guests: string;
};

export class HotelSearchPage {
  readonly page: Page;
  readonly cityInput: Locator;
  readonly checkinDateInput: Locator;
  readonly checkoutDateInput: Locator;
  readonly guestsInput: Locator;
  readonly searchButton: Locator;
  readonly hotelCard: Locator;
  readonly hotelStars: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cityInput = page.locator(SELECTORS.hotels.city);
    this.checkinDateInput = page.locator(SELECTORS.hotels.checkinDate);
    this.checkoutDateInput = page.locator(SELECTORS.hotels.checkoutDate);
    this.guestsInput = page.locator(SELECTORS.hotels.guests);
    this.searchButton = page.locator(SELECTORS.buttons.search);
    this.hotelCard = page.locator(SELECTORS.hotels.card);
    this.hotelStars = page.locator(SELECTORS.hotels.stars);
  }

  async fillHotelSearch(data: HotelSearchData) {
    await this.cityInput.fill(data.city);
    await this.checkinDateInput.fill(data.checkinDate);
    await this.checkoutDateInput.fill(data.checkoutDate);
    await this.guestsInput.fill(data.guests);
  }

  async search() {
    await this.searchButton.click();
  }

  async validateResultsVisible() {
    await expect(this.hotelCard.first()).toBeVisible();
  }

  async selectFirstHotel() {
    await this.hotelCard.first().click();
  }
}
