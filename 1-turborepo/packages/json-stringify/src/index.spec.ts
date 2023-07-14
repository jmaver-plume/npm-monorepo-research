import { expect } from "chai";
import { jsonStringify } from "./index";

describe("jsonStringify", function () {
  it("should stringify", function () {
    const input = { a: 1, b: 2, c: 3 };
    const output = jsonStringify(input);
    const expected = JSON.stringify(input);
    expect(output).to.eq(expected);
  });
});
