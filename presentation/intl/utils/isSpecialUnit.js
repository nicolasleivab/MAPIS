const STANDARD_UNITS = ['number', 'decimal', 'percent', 'currency'];

export function isSpecialUnit(type) {
  return !STANDARD_UNITS.includes(type);
}
