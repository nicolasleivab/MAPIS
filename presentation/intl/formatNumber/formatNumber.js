import { roundNumber, isSpecialUnit } from '../utils';

export function formatNumberMethod(
  num,
  locale,
  { type, precision, compactDisplay, signDisplay, currencyCode }
) {
  const roundedNumber = roundNumber(num, precision);

  if (type === 'scientific-notation') {
    const formattedNumber = num?.toExponential(precision);

    return formattedNumber;
  }

  if (isSpecialUnit(type)) {
    return new Intl.NumberFormat(locale, {
      style: 'unit',
      maximumFractionDigits: precision,
      minimumFractionDigits: precision,
      unit: type,
      notation: compactDisplay === true ? 'compact' : 'standard',
    }).format(roundedNumber);
  }

  if (type === 'currency') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: precision,
      minimumFractionDigits: precision,
      notation: compactDisplay === true ? 'compact' : 'standard',
    }).format(roundedNumber);
  }

  return new Intl.NumberFormat(locale, {
    style: type,
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
    notation: compactDisplay === true ? 'compact' : 'standard',
    signDisplay,
  }).format(roundedNumber);
}
