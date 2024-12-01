// Keep in mind that Intl.DateTimeFormat formats dates based on locale conventions
export function formatDateMethod(date, locale, options) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(newDate);
}
