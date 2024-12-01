import { roundNumber, isSpecialUnit, convertFromUnit } from '../utils';

export function formatNumberMethod(
  num,
  locale,
  { type, convertFrom, precision, compactDisplay, signDisplay, currencyCode }
) {
  const roundedNumber = roundNumber(num, precision);

  function getFormattedNumber(currentNum) {
    const roundedNumber = roundNumber(currentNum, precision);

    const formattedNumber = new Intl.NumberFormat(locale, {
      style: 'decimal',
      notation: compactDisplay === true ? 'compact' : 'standard',
      maximumFractionDigits: precision,
      minimumFractionDigits: precision,
    }).format(roundedNumber);

    return formattedNumber;
  }

  if (type === 'dynamicDecimal') {
    const convertedNumber = convertFromUnit(co2eValue, {
      from: convertFrom,
      to: 'g',
    });
    const formattedNumber = getFormattedNumber(convertedNumber);

    return formattedNumber;
  }

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
