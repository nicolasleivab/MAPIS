export function convertFromUnit(num, { from, to }) {
  if (from === 'g' && to === 'kg') {
    return num / 1000;
  }
  if (from === 'g' && to === 't') {
    return num / 1000000;
  }
  if (from === 'kg' && to === 'g') {
    return num * 1000;
  }
  if (from === 'kg' && to === 't') {
    return num / 1000;
  }
  if (from === 't' && to === 'g') {
    return num * 1000000;
  }
  if (from === 't' && to === 'kg') {
    return num * 1000;
  }

  return num;
}
