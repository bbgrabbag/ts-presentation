import { reduce, map, filter, sum, keys } from "../";

describe("Sum", () => {
    it("Should equal 4", () => {
        expect(sum(2,2)).toBe(4);
    });
});

describe("Keys", () => {
    it("Should get all object property names", () => {
        expect(keys({name: "Ben", age: 32})).toEqual(["name", "age"]);
    });
});

describe("Filter", () => {
  it("Should return even numbers", () => {
    expect(filter([1, 2, 3, 4], (v) => !(v % 2))).toEqual([2, 4]);
  });
});

describe("Reduce", () => {
  it("Should output concatenated digits", () => {
    expect(reduce<number, string>([1, 2, 3], (t, v) => t + v.toString(), "")).toBe("123");
  });
});

describe("Map", () => {
  it("Should output doubled numbers", () => {
    expect(map([1, 2, 3], (v) => v * 2)).toEqual([2, 4, 6]);
  });
});
