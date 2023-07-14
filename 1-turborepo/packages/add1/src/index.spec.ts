import { expect } from "chai";
import { add1 } from "./index";

describe("add1", function () {
  it("should add one", function () {
    expect(add1(5)).to.eq(6);
  });
});
