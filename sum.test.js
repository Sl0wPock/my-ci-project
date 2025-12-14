const { sum } = require("./index");

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("adds negative numbers", () => {
  expect(sum(-1, -2)).toBe(-3);
});
