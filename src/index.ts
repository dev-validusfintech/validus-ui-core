import * as numberUtils from "./utils/numberUtils";
import * as stringUtils from "./utils/stringUtils";
import * as dateUtils from "./utils/dateUtils";
import * as validationUtils from "./utils/validationUtils";

// Re-export utilities
export { numberUtils, stringUtils, dateUtils, validationUtils };

// ✅ Ensure `amountInWords` is directly accessible
export { amountInWords } from "./utils/numberUtils";
