const STRINGS = {
  AND: "and",
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
  CRORE: "Crore"
};

export const amountInWords = (num: number): string => {
  if (num === 0) return STRINGS.ZERO;
  
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

  if (num >= 10000000) {
    result += getWords(Math.floor(num / 10000000)) + STRINGS.SPACE + STRINGS.CRORE + STRINGS.SPACE;
    num %= 10000000;
  }
  if (num >= 100000) {
    result += getWords(Math.floor(num / 100000)) + STRINGS.SPACE + STRINGS.LAKH + STRINGS.SPACE;
    num %= 100000;
  }
  if (num >= 1000) {
    result += getWords(Math.floor(num / 1000)) + STRINGS.SPACE + STRINGS.THOUSAND + STRINGS.SPACE;
    num %= 1000;
  }
  if (num >= 100) {
    result += singleDigits[Math.floor(num / 100)] + STRINGS.SPACE + STRINGS.HUNDRED + STRINGS.SPACE;
    num %= 100;
  }
  if (num > 0) {
    result += getWords(num);
  }

  return result.trim();
};
