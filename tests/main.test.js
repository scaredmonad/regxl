import { test } from "uvu";
import * as assert from "uvu/assert";
import {
  ALPHA_NUM,
  DIGIT,
  EOL,
  ONE_OR_MORE,
  OR,
  ParserGenerator,
  SOL,
  WHITESPACE,
  WHITESPACE_CHAR,
  ZERO_OR_MORE,
} from "../dist/index.js";

test("number literals & blocks", () => {
  const parser = new ParserGenerator();

  const numberRule = Symbol("number");
  const parenthesesRule = Symbol("parentheses");
  const blockRule = Symbol("block");

  parser.pushScope(numberRule, "[0-9]+");
  parser.pushScope(parenthesesRule, "\\(.*\\)");
  parser.pushScope(blockRule, "\\{.*\\}");

  const expr = "(123)";
  assert.is(parser.testExpression(expr), true);
  // console.log(parser.parseExpression(expr));
});

test("constants & arithmetic parser", () => {
  const arithmetic = new ParserGenerator();
  arithmetic.pushScope(Symbol("number"), DIGIT + ONE_OR_MORE);
  arithmetic.pushScope(
    Symbol("binaryOperation"),
    "<number>" + WHITESPACE_CHAR + "<operator>" + WHITESPACE_CHAR + "<number>"
  );
  arithmetic.pushScope(Symbol("operator"), "[+\\-*/]");
  arithmetic.pushScope(
    Symbol("expression"),
    "<number>(<binaryOperation><number>)*"
  );
  const arithmeticCode = "42 + 3 * 2 - 1";
  console.log(arithmetic.testExpression(arithmeticCode)); // true
  const arithmeticAST = arithmetic.parseExpression();
  console.log(JSON.stringify(arithmeticAST, null, 2));
  arithmetic.clean();
});

test.run();
