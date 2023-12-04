import { test } from "uvu";
import * as assert from "uvu/assert";
import { ParserGenerator } from "../dist/index.js";

test("number literals and expressions", () => {
  const parser = new ParserGenerator();

  const numberRule = Symbol("number");
  const parenthesesRule = Symbol("parentheses");
  const blockRule = Symbol("block");

  parser.pushScope(numberRule, "[0-9]+");
  parser.pushScope(parenthesesRule, "\\(.*\\)");
  parser.pushScope(blockRule, "\\{.*\\}");

  const expr = "(123)";
  assert.is(parser.testExpression(expr), true);
  console.log(parser.parseExpression(expr));
});

test.run();
