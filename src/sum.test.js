import { sum } from "./sum";

describe("sum", () => {
  it("sum number", () => {
    expect(sum(3, 2)).toEqual(5);
  });
});
