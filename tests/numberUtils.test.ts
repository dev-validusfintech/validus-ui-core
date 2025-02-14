import { amountInWords } from "../src/utils/numberUtils";

test("converts numbers to words", () => {
  expect(amountInWords(5)).toBe("Rupees Five");
  expect(amountInWords(21)).toBe("Rupees Twenty One");
  expect(amountInWords(105)).toBe("Rupees One Hundred Five");
  expect(amountInWords(1000)).toBe("Rupees One Thousand");
  expect(amountInWords(50500.89)).toBe("Rupees Fifty Thousand Five Hundred and Eighty Nine Paise");
  expect(amountInWords(-123456789.24)).toBe("Rupees Negative Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine and Twenty Four Paise");
});