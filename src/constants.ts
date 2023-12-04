export const ALPHA_NO_CAP = "[a-z]";
export const ALPHA_CAP = "[A-Z]";
export const ALPHA = "[a-zA-Z]";
export const NUM = "\\d";
export const ALPHA_NUM = "[a-zA-Z\\d]";
export const WHITESPACE = "\\s";
export const NON_WHITESPACE = "\\S";
export const WORD_BOUNDARY = "\\b";
export const NON_WORD_BOUNDARY = "\\B";
export const DIGIT_BOUNDARY = "\\d\\b";
export const NON_DIGIT_BOUNDARY = "\\D\\B";
export const SOL = "^";
export const EOL = "$";

export const OPTIONAL = "?";
export const ZERO_OR_ONE = "?";
export const ZERO_OR_MORE = "*";
export const ONE_OR_MORE = "+";
export const EXACTLY_N_TIMES = (n: number) => `{${n}}`;
export const BETWEEN_N_AND_M_TIMES = (n: number, m: number) => `{${n},${m}}`;

export const ANY_CHAR = ".";
export const DIGIT = "\\d";
export const NON_DIGIT = "\\D";
export const WORD_CHAR = "\\w";
export const NON_WORD_CHAR = "\\W";
export const WHITESPACE_CHAR = "\\s";
export const NON_WHITESPACE_CHAR = "\\S";

export const START_OF_INPUT = "^";
export const END_OF_INPUT = "$";

export const ESCAPE = "\\";

export const L_BRACKET = "\\[";
export const R_BRACKET = "\\]";
export const L_BRACE = "\\{";
export const R_BRACE = "\\}";
export const L_PAREN = "\\(";
export const R_PAREN = "\\)";

export const OR = "|";

export const LT = "<";
export const GT = ">";
export const AMPERSAND = "&";
