import { STRINGS } from "../constants/numberConstants";

export const amountInWords = (amount: number): string => {
  const positive = Math.abs(amount);
  let number: number = Math.floor(positive);
  let decimal: any = positive.toString().split('.')[1];

  if (decimal > 99) {
    decimal = Number(decimal.toString().slice(0, 2));
  } else if (decimal?.length === 1) {
    decimal *= 10
  } else {
    decimal = Number(decimal)
  }

  if (!number && !decimal) return (STRINGS.RUPEES + STRINGS.SPACE + STRINGS.ZERO);
  if (amount > 10000000000) return STRINGS.MAX_LIMIT_EXCEED;
  if (amount < -10000000000) return STRINGS.MIN_LIMIT_EXCEED;

  const singleDigits = [STRINGS.ZERO, STRINGS.ONE, STRINGS.TWO, STRINGS.THREE, STRINGS.FOUR, STRINGS.FIVE, STRINGS.SIX, STRINGS.SEVEN, STRINGS.EIGHT, STRINGS.NINE];
  const doubleDigits = [STRINGS.TEN, STRINGS.ELEVEN, STRINGS.TWELVE, STRINGS.THIRTEEN, STRINGS.FOURTEEN, STRINGS.FIFTEEN, STRINGS.SIXTEEN, STRINGS.SEVENTEEN, STRINGS.EIGHTEEN, STRINGS.NINETEEN];
  const tensPlace = ["", "", STRINGS.TWENTY, STRINGS.THIRTY, STRINGS.FORTY, STRINGS.FIFTY, STRINGS.SIXTY, STRINGS.SEVENTY, STRINGS.EIGHTY, STRINGS.NINETY];

  let result = "";

  const getWords = (n: number) => {
    if (n < 10) return singleDigits[n];
    if (n < 20) return doubleDigits[n - 10];
    if (n < 100) return tensPlace[Math.floor(n / 10)] + (n % 10 !== 0 ? STRINGS.SPACE + singleDigits[n % 10] : "");
    return "";
  };

  if (number >= 1000000000) {
    result += singleDigits[Math.floor(number / 1000000000)] + STRINGS.SPACE + STRINGS.HUNDRED + STRINGS.SPACE + getWords(Math.floor(number / 10000000)) + (number % 1000000000 < 10000000 ? STRINGS.CRORE + STRINGS.SPACE : "");
    number %= 1000000000;
  }
  if (number >= 10000000) {
    result += getWords(Math.floor(number / 10000000)) + STRINGS.SPACE + STRINGS.CRORE + STRINGS.SPACE;
    number %= 10000000;
  }
  if (number >= 100000) {
    result += getWords(Math.floor(number / 100000)) + STRINGS.SPACE + STRINGS.LAKH + STRINGS.SPACE;
    number %= 100000;
  }
  if (number >= 1000) {
    result += getWords(Math.floor(number / 1000)) + STRINGS.SPACE + STRINGS.THOUSAND + STRINGS.SPACE;
    number %= 1000;
  }
  if (number >= 100) {
    result += singleDigits[Math.floor(number / 100)] + STRINGS.SPACE + STRINGS.HUNDRED + STRINGS.SPACE;
    number %= 100;
  }
  if (number > 0) {
    result += getWords(number);
  }
  if (decimal > 0) {
    result += (number > 0 ? STRINGS.SPACE : "") + STRINGS.AND + STRINGS.SPACE + getWords(decimal).trim();
  }

  const finalResult = STRINGS.RUPEES + STRINGS.SPACE + result.trim() + (decimal > 0 ? STRINGS.SPACE + STRINGS.PAISE : "");

  return finalResult;
};