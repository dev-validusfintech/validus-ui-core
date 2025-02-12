import { amountInWords } from "../src/utils/numberUtils";

test("converts numbers to words", () => {
  expect(amountInWords(5)).toBe("Five");
  expect(amountInWords(21)).toBe("Twenty One");
  expect(amountInWords(105)).toBe("One Hundred Five");
  expect(amountInWords(1000)).toBe("One Thousand");
});
