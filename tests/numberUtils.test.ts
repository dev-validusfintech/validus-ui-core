import { amountInWords } from "../src/utils/numberUtils";

test("converts numbers to words", () => {
  expect(amountInWords(5)).toBe("Rupees Five");
  expect(amountInWords(21)).toBe("Rupees Twenty One");
  expect(amountInWords(105)).toBe("Rupees One Hundred Five");
  expect(amountInWords(1000)).toBe("Rupees One Thousand");
  expect(amountInWords(9999999999)).toBe("Rupees Nine Hundred Ninety Nine Crore Ninety Nine Lakh Ninety Nine Thousand Nine Hundred Ninety Nine");
  expect(amountInWords(123456789.125)).toBe("Rupees Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine and Thirteen Paise");
});