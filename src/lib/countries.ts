export interface Country {
  name: string;
  code: string;
  callingCode: string;
  currency: string;
  flag: string;
}

export const supportedCountries: Country[] = [
  { name: "Sweden", code: "SE", callingCode: "+46", currency: "SEK (Swedish Krona)", flag: "🇸🇪" },
  { name: "Denmark", code: "DK", callingCode: "+45", currency: "DKK (Danish Krone)", flag: "🇩🇰" },
  { name: "Norway", code: "NO", callingCode: "+47", currency: "NOK (Norwegian Krone)", flag: "🇳🇴" },
  { name: "Finland", code: "FI", callingCode: "+358", currency: "EUR (Euro)", flag: "🇫🇮" },
  { name: "Poland", code: "PL", callingCode: "+48", currency: "PLN (Polish Zloty)", flag: "🇵🇱" },
  { name: "Germany", code: "DE", callingCode: "+49", currency: "EUR (Euro)", flag: "🇩🇪" },
  { name: "Netherlands", code: "NL", callingCode: "+31", currency: "EUR (Euro)", flag: "🇳🇱" },
  { name: "Belgium", code: "BE", callingCode: "+32", currency: "EUR (Euro)", flag: "🇧🇪" },
  { name: "France", code: "FR", callingCode: "+33", currency: "EUR (Euro)", flag: "🇫🇷" },
  { name: "Spain", code: "ES", callingCode: "+34", currency: "EUR (Euro)", flag: "🇪🇸" },
  { name: "Italy", code: "IT", callingCode: "+39", currency: "EUR (Euro)", flag: "🇮🇹" },
  { name: "Portugal", code: "PT", callingCode: "+351", currency: "EUR (Euro)", flag: "🇵🇹" },
  { name: "Switzerland", code: "CH", callingCode: "+41", currency: "CHF (Swiss Franc)", flag: "🇨🇭" },
  { name: "Austria", code: "AT", callingCode: "+43", currency: "EUR (Euro)", flag: "🇦🇹" },
  { name: "Ireland", code: "IE", callingCode: "+353", currency: "EUR (Euro)", flag: "🇮🇪" },
  { name: "United Kingdom", code: "GB", callingCode: "+44", currency: "GBP (British Pound)", flag: "🇬🇧" },
  { name: "Morocco", code: "MA", callingCode: "+212", currency: "MAD (Moroccan Dirham)", flag: "🇲🇦" },
];

// Get country names only for dropdowns
export const countryNames = supportedCountries.map(country => country.name);

// Get countries with flags for display
export const countriesWithFlags = supportedCountries.map(country => ({
  code: country.flag,
  name: country.name,
}));

