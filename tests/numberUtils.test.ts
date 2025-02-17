import { amountInWords } from "../src/utils/numberUtils";

test("converts numbers to words", () => {
  expect(amountInWords(5)).toBe("Rupees Five");
  expect(amountInWords(21)).toBe("Rupees Twenty One");
  expect(amountInWords(105)).toBe("Rupees One Hundred Five");
  expect(amountInWords(1000)).toBe("Rupees One Thousand");
  expect(amountInWords(50500.89)).toBe(
    "Rupees Fifty Thousand Five Hundred and Eighty Nine Paise",
  );
  expect(amountInWords(-123456789.24)).toBe(
    "Rupees Negative Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine and Twenty Four Paise",
  );
  expect(amountInWords(9999999999)).toBe(
    "Rupees Nine Hundred Ninety Nine Crore Ninety Nine Lakh Ninety Nine Thousand Nine Hundred Ninety Nine",
  );
  expect(amountInWords(123456789.125)).toBe(
    "Rupees Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine and Twelve Paise",
  );
  expect(amountInWords(0)).toBe("Rupees Zero");
  expect(amountInWords(1)).toBe("Rupees One");
  expect(amountInWords(9)).toBe("Rupees Nine");
  expect(amountInWords(10)).toBe("Rupees Ten");
  expect(amountInWords(19)).toBe("Rupees Nineteen");
  expect(amountInWords(20)).toBe("Rupees Twenty");
  expect(amountInWords(99)).toBe("Rupees Ninety Nine");
  expect(amountInWords(100)).toBe("Rupees One Hundred");
  expect(amountInWords(250)).toBe("Rupees Two Hundred Fifty");
  expect(amountInWords(999)).toBe("Rupees Nine Hundred Ninety Nine");
  expect(amountInWords(1000)).toBe("Rupees One Thousand");
  expect(amountInWords(1100)).toBe("Rupees One Thousand One Hundred");
  expect(amountInWords(5000)).toBe("Rupees Five Thousand");
  expect(amountInWords(9999)).toBe(
    "Rupees Nine Thousand Nine Hundred Ninety Nine",
  );
  expect(amountInWords(100000)).toBe("Rupees One Lakh");
  expect(amountInWords(525000)).toBe("Rupees Five Lakh Twenty Five Thousand");
  expect(amountInWords(999999)).toBe(
    "Rupees Nine Lakh Ninety Nine Thousand Nine Hundred Ninety Nine",
  );
  expect(amountInWords(10000000)).toBe("Rupees One Crore");
  expect(amountInWords(25000000)).toBe("Rupees Two Crore Fifty Lakh");
  expect(amountInWords(75000000)).toBe("Rupees Seven Crore Fifty Lakh");
  expect(amountInWords(123456789)).toBe(
    "Rupees Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine",
  );
  expect(amountInWords(9876543210)).toBe(
    "Rupees Nine Hundred Eighty Seven Crore Sixty Five Lakh Forty Three Thousand Two Hundred Ten",
  );
  expect(amountInWords(1111111111)).toBe(
    "Rupees One Hundred Eleven Crore Eleven Lakh Eleven Thousand One Hundred Eleven",
  );
  expect(amountInWords(100.5)).toBe("Rupees One Hundred and Fifty Paise");
  expect(amountInWords(-100.05)).toBe("Rupees Negative One Hundred and Five Paise");
  expect(amountInWords(2500.99)).toBe(
    "Rupees Two Thousand Five Hundred and Ninety Nine Paise",
  );
  expect(amountInWords(123456789.75)).toBe(
    "Rupees Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine and Seventy Five Paise",
  );
});
