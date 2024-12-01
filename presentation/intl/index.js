// Based on native https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

import {
  DEFAULT_DATE_OPTIONS,
  DEFAULT_NUMBER_OPTIONS,
} from './constants/defaultOptions';
import { formatDateMethod } from './formatDate/formatDate';
import { formatNumberMethod } from './formatNumber/formatNumber';
import { LOCALES } from './types';

export function createIntl(locale = LOCALES[0]) {
  return {
    formatNumber: function (num, options) {
      return formatNumberMethod(num, locale, {
        type: options?.type ?? DEFAULT_NUMBER_OPTIONS.type,
        precision: options?.precision ?? DEFAULT_NUMBER_OPTIONS.precision,
        compactDisplay:
          options?.compactDisplay ?? DEFAULT_NUMBER_OPTIONS.compactDisplay,
        signDisplay: options?.signDisplay ?? DEFAULT_NUMBER_OPTIONS.signDisplay,
        currencyCode:
          options?.currencyCode ?? DEFAULT_NUMBER_OPTIONS.currencyCode,
      });
    },

    formatDate: function (date, options) {
      return formatDateMethod(date, locale, {
        year: options?.year ?? DEFAULT_DATE_OPTIONS.year,
        month: options?.month ?? DEFAULT_DATE_OPTIONS.month,
        day: options?.day ?? DEFAULT_DATE_OPTIONS.day,
      });
    },
  };
}
