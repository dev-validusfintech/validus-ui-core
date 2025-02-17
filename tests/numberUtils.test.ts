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
    "Rupees Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine and Twenty Four Paise",
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
  expect(amountInWords(-100.05)).toBe("Rupees One Hundred and Five Paise");
  expect(amountInWords(2500.99)).toBe(
    "Rupees Two Thousand Five Hundred and Ninety Nine Paise",
  );
  expect(amountInWords(123456789.75)).toBe(
    "Rupees Twelve Crore Thirty Four Lakh Fifty Six Thousand Seven Hundred Eighty Nine and Seventy Five Paise",
  );
  expect(amountInWords(8407970809.68)).toBe('Rupees Eight Hundred Forty Crore Seventy Nine Lakh Seventy Thousand Eight Hundred Nine and Sixty Eight Paise');
  expect(amountInWords(6649900710.8)).toBe('Rupees Six Hundred Sixty Four Crore Ninety Nine Lakh Seven Hundred Ten and Eighty Paise');
  expect(amountInWords(4399212265.11)).toBe('Rupees Four Hundred Thirty Nine Crore Ninety Two Lakh Twelve Thousand Two Hundred Sixty Five and Eleven Paise');
  expect(amountInWords(5690654047.65)).toBe('Rupees Five Hundred Sixty Nine Crore Six Lakh Fifty Four Thousand Forty Seven and Sixty Five Paise');
  expect(amountInWords(6038710079.18)).toBe('Rupees Six Hundred Three Crore Eighty Seven Lakh Ten Thousand Seventy Nine and Eighteen Paise');
  expect(amountInWords(3805289233.0)).toBe('Rupees Three Hundred Eighty Crore Fifty Two Lakh Eighty Nine Thousand Two Hundred Thirty Three');
  expect(amountInWords(4981957958.1)).toBe('Rupees Four Hundred Ninety Eight Crore Nineteen Lakh Fifty Seven Thousand Nine Hundred Fifty Eight and Ten Paise');
  expect(amountInWords(3119801006.14)).toBe('Rupees Three Hundred Eleven Crore Ninety Eight Lakh One Thousand Six and Fourteen Paise');
  expect(amountInWords(5523577145.54)).toBe('Rupees Five Hundred Fifty Two Crore Thirty Five Lakh Seventy Seven Thousand One Hundred Forty Five and Fifty Four Paise');
  expect(amountInWords(1887252642.27)).toBe('Rupees One Hundred Eighty Eight Crore Seventy Two Lakh Fifty Two Thousand Six Hundred Forty Two and Twenty Seven Paise');
  expect(amountInWords(7694495757.07)).toBe('Rupees Seven Hundred Sixty Nine Crore Forty Four Lakh Ninety Five Thousand Seven Hundred Fifty Seven and Seven Paise');
  expect(amountInWords(5088085809.15)).toBe('Rupees Five Hundred Eight Crore Eighty Lakh Eighty Five Thousand Eight Hundred Nine and Fifteen Paise');
  expect(amountInWords(6514938353.8)).toBe('Rupees Six Hundred Fifty One Crore Forty Nine Lakh Thirty Eight Thousand Three Hundred Fifty Three and Eighty Paise');
});
