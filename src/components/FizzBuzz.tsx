import { useState } from "react";

export default function FizzBuzz(): JSX.Element {
const [currentValue, queueNewValue] = useState<number>(1);
const [storedNumber, queueStoredNumber] = useState<(number|string)[]>([]);

const handleNextClick = () => {
    queueNewValue(prevNumber => prevNumber + 1);
    queueStoredNumber(prevValue =>[...prevValue, currentValue] );
};


    return (
        <>
          <h1>Welcome to the FizzBuzz App</h1>
          <p>Lets Begin: {storedNumber.join(", ")}</p>
          <button onClick={handleNextClick }>Next</button>
        </>
      );




}