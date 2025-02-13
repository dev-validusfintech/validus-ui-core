const STRINGS = {
  AND: "and",
  RUPEES: "Rupees",
  PAISE: "Paise",
  COMMA: ",",
  SPACE: " ",
  ZERO: "Zero",
  ONE: "One",
  TWO: "Two",
  THREE: "Three",
  FOUR: "Four",
  FIVE: "Five",
  SIX: "Six",
  SEVEN: "Seven",
  EIGHT: "Eight",
  NINE: "Nine",
  TEN: "Ten",
  ELEVEN: "Eleven",
  TWELVE: "Twelve",
  THIRTEEN: "Thirteen",
  FOURTEEN: "Fourteen",
  FIFTEEN: "Fifteen",
  SIXTEEN: "Sixteen",
  SEVENTEEN: "Seventeen",
  EIGHTEEN: "Eighteen",
  NINETEEN: "Nineteen",
  TWENTY: "Twenty",
  THIRTY: "Thirty",
  FORTY: "Forty",
  FIFTY: "Fifty",
  SIXTY: "Sixty",
  SEVENTY: "Seventy",
  EIGHTY: "Eighty",
  NINETY: "Ninety",
  HUNDRED: "Hundred",
  THOUSAND: "Thousand",
  LAKH: "Lakh",
  CRORE: "Crore",
  LIMIT_EXCEED: "Max limit crossed!",
};

export const amountInWords = (amount: number): string => {
  let number: number = Math.floor(amount);
  let decimal: number = Number((amount - number).toFixed(2)) * 100;
  if (number === 0 && decimal === 0) return STRINGS.ZERO;
  if (number > 9999999999) return STRINGS.LIMIT_EXCEED;

  const singleDigits = [STRINGS.ZERO, STRINGS.ONE, STRINGS.TWO, STRINGS.THREE, STRINGS.FOUR, STRINGS.FIVE, STRINGS.SIX, STRINGS.SEVEN, STRINGS.EIGHT, STRINGS.NINE];
  const doubleDigits = [STRINGS.TEN, STRINGS.ELEVEN, STRINGS.TWELVE, STRINGS.THIRTEEN, STRINGS.FOURTEEN, STRINGS.FIFTEEN, STRINGS.SIXTEEN, STRINGS.SEVENTEEN, STRINGS.EIGHTEEN, STRINGS.NINETEEN];
  const tensPlace = ["", "", STRINGS.TWENTY, STRINGS.THIRTY, STRINGS.FORTY, STRINGS.FIFTY, STRINGS.SIXTY, STRINGS.SEVENTY, STRINGS.EIGHTY, STRINGS.NINETY];

  let result = "";

  const getWords = (n: number): string => {
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
  return result.trim();
};
