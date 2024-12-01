export function roundNumber(num, precision = 2) {
  const computedPrecision = Math.pow(10, precision);

  return (
    Math.round((num + Number.EPSILON) * computedPrecision) / computedPrecision
  );
}
