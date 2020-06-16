import { sum } from "@/functions/sum.ts";

describe("sum.js", () => {
  it("1 + 2 應該要等於 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});