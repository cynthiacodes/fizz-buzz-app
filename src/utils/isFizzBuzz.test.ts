import { isFizzBuzz } from "./isFizzBuzz";

test("check isFizzBuzz returns Fizz, FizzBuzz and Number correctly", () => {
    expect(isFizzBuzz(3)).toEqual("Fizz");
    expect(isFizzBuzz(5)).toEqual("Buzz");
    expect(isFizzBuzz(15)).toEqual("FizzBuzz");
    expect(isFizzBuzz(1)).toEqual(1);
  });