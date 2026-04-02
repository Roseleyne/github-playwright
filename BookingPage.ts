import { expect, Locator, Page } from '@playwright/test';
import { SELECTORS } from '../utils/constants';

export class BookingPage {
  readonly page: Page;
  readonly summaryRoute: Locator;
  readonly summaryDates: Locator;
  readonly summaryPassengers: Locator;
  readonly summaryPrice: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.summaryRoute = page.locator(SELECTORS.booking.summaryRoute);
    this.summaryDates = page.locator(SELECTORS.booking.summaryDates);
    this.summaryPassengers = page.locator(SELECTORS.booking.summaryPassengers);
    this.summaryPrice = page.locator(SELECTORS.booking.summaryPrice);
    this.continueButton = page.locator(SELECTORS.buttons.continue);
  }

  async validateSummaryLoaded() {
    await expect(this.summaryRoute).toBeVisible();
    await expect(this.summaryDates).toBeVisible();
    await expect(this.summaryPassengers).toBeVisible();
    await expect(this.summaryPrice).toBeVisible();
    await expect(this.continueButton).toBeEnabled();
  }
}
