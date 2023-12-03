import { test } from "uvu";
import * as assert from "uvu/assert";
import { add } from "../dist/index.js";

test("pass", (t) => {
  console.log("Hello, World!");
  assert.is(30, add(10, 20));
});

test.run();
