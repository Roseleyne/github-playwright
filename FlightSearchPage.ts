import { expect, Locator, Page } from '@playwright/test';
import { SELECTORS } from '../utils/constants';

type FlightSearchData = {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: string;
};

export class FlightSearchPage {
  readonly page: Page;
  readonly originInput: Locator;
  readonly destinationInput: Locator;
  readonly departureDateInput: Locator;
  readonly returnDateInput: Locator;
  readonly passengersInput: Locator;
  readonly searchButton: Locator;
  readonly resultsCard: Locator;
  readonly errorMessage: Locator;
  readonly flightPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.originInput = page.locator(SELECTORS.flights.origin);
    this.destinationInput = page.locator(SELECTORS.flights.destination);
    this.departureDateInput = page.locator(SELECTORS.flights.departureDate);
    this.returnDateInput = page.locator(SELECTORS.flights.returnDate);
    this.passengersInput = page.locator(SELECTORS.flights.passengers);
    this.searchButton = page.locator(SELECTORS.buttons.search);
    this.resultsCard = page.locator(SELECTORS.flights.card);
    this.errorMessage = page.locator(SELECTORS.messages.error);
    this.flightPrice = page.locator(SELECTORS.flights.price);
  }

  async fillFlightSearch(data: FlightSearchData) {
    await this.originInput.fill(data.origin);
    await this.destinationInput.fill(data.destination);
    await this.departureDateInput.fill(data.departureDate);
    await this.returnDateInput.fill(data.returnDate);
    await this.passengersInput.fill(data.passengers);
  }

  async search() {
    await this.searchButton.click();
  }

  async validateResultsVisible() {
    await expect(this.resultsCard.first()).toBeVisible();
  }

  async validateErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }

  async getFirstFlightPrice(): Promise<string> {
    return (await this.flightPrice.first().textContent()) ?? '';
  }

  async getSecondFlightPrice(): Promise<string> {
    return (await this.flightPrice.nth(1).textContent()) ?? '';
  }

  async selectFirstResult() {
    await this.resultsCard.first().click();
  }
}
