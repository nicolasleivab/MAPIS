// Based on native intl https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

export const PRECISION_VALUES = [0, 1, 2, 3, 4, 5, 6];

// Keep in mind that Intl.DateTimeFormat formats dates based on locale conventions
export const DATE_OPTIONS = {
  year: ['2-digit', 'numeric'],
  month: ['2-digit', 'numeric', 'narrow', 'short', 'long'],
  day: ['2-digit', 'numeric'],
  weekday: ['narrow', 'short', 'long'],
  dayPeriod: ['narrow', 'short', 'long'],
  hour: ['2-digit', 'numeric'],
  minute: ['2-digit', 'numeric'],
  second: ['2-digit', 'numeric'],
  fractionalSecondDigits: [1, 2, 3],
  era: ['narrow', 'short', 'long'],
  timeZoneName: [
    'short',
    'long',
    'shortOffset',
    'longOffset',
    'shortGeneric',
    'longGeneric',
  ],
};

export const INPUT_DATE_TYPES = ['Date', 'number', 'string'];

export const CURRENCY_CODES = ['CLP', 'USD', 'EUR']; // ... and many more

export const LOCALES = ['en-US', 'es-CL']; // ... and many more

export const SIGN_DISPLAY = ['auto', 'always', 'never', 'exceptZero'];

export const COMPACT_NUMBER_DISPLAY = [true, false];

export const DATA_FORMAT = [
  'decimal',
  'number',
  'currency',
  'millimeter',
  'centimeter',
  'gram',
  'kilogram',
  'meter',
  'kilometer',
  'celsius',
  'gCO2e',
  'kgCO2e',
  'tCO2e',
  'dynamicCO2e',
  'dynamicDecimal',
  'eco-score',
  'acre',
  'bit',
  'byte',
  'day',
  'degree',
  'fahrenheit',
  'fluid-ounce',
  'foot',
  'gallon',
  'gigabit',
  'gigabyte',
  'hectare',
  'hour',
  'inch',
  'kilobit',
  'kilobyte',
  'liter',
  'megabit',
  'megabyte',
  'mile',
  'mile-scandinavian',
  'milliliter',
  'millisecond',
  'minute',
  'month',
  'ounce',
  'percent',
  'petabyte',
  'pound',
  'second',
  'stone',
  'terabit',
  'terabyte',
  'week',
  'yard',
  'year',
  'scientific-notation',
];
