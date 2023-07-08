import { useState } from "react";
import { isFizzBuzz } from "../utils/isFizzBuzz";

type fizzBuzzArrayType = (number | string)[];

export default function FizzBuzz(): JSX.Element {
  const [currentValue, queueNewValue] = useState<number>(1);
  const [storedNumber, queueStoredNumber] = useState<fizzBuzzArrayType>([]);

  const handleNextClick = () => {
    queueNewValue((prevNum) => prevNum + 1);
    queueStoredNumber((prevValue) => [...prevValue, isFizzBuzz(currentValue)]);
  };

  const convertToList = (inputValue: number | string, index: number): JSX.Element => {
    return <li key ={index}>{inputValue}</li>;
  };

  const listOfValues = storedNumber.map(convertToList);

  return (
    <>
      <h1>Welcome to the FizzBuzz App</h1>
      <p>Lets Begin: {storedNumber.join(", ")}</p>
      <button onClick={handleNextClick}>Next</button>
      <ul>{listOfValues}</ul>
    </>
  );
}
