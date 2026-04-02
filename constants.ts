export const SELECTORS = {
  tabs: {
    flights: '[data-testid="tab-flights"]',
    hotels: '[data-testid="tab-hotels"]'
  },
  buttons: {
    search: '[data-testid="search-button"]',
    continue: '[data-testid="continue-button"]'
  },
  flights: {
    origin: '[data-testid="origin-input"]',
    destination: '[data-testid="destination-input"]',
    departureDate: '[data-testid="departure-date"]',
    returnDate: '[data-testid="return-date"]',
    passengers: '[data-testid="passengers-input"]',
    card: '[data-testid="flight-card"]',
    price: '[data-testid="flight-price"]'
  },
  hotels: {
    city: '[data-testid="city-input"]',
    checkinDate: '[data-testid="checkin-date"]',
    checkoutDate: '[data-testid="checkout-date"]',
    guests: '[data-testid="guests-input"]',
    card: '[data-testid="hotel-card"]',
    stars: '[data-testid="hotel-stars"]'
  },
  booking: {
    summaryRoute: '[data-testid="summary-route"]',
    summaryDates: '[data-testid="summary-dates"]',
    summaryPassengers: '[data-testid="summary-passengers"]',
    summaryPrice: '[data-testid="summary-price"]'
  },
  messages: {
    error: '[data-testid="error-message"]'
  }
};
