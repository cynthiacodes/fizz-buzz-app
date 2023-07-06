import { useState } from "react";
import { getFizzBuzz } from "../utils/getFizzBuzz";

export default function FizzBuzz(): JSX.Element {
const [currentValue, queueNewValue] = useState<number>(1);
const [storedNumber, queueStoredNumber] = useState<(number|string)[]>([]);

const handleNextClick = () => {
    const number = 0;
    queueNewValue(prevNum => prevNum + 1);
    queueStoredNumber(prevValue =>[...prevValue, getFizzBuzz(currentValue)] );

    }



    return (
        <>
          <h1>Welcome to the FizzBuzz App</h1>
          <p>Lets Begin: {storedNumber.join(", ")}</p>
          <button onClick={handleNextClick }>Next</button>
        </>
      );




}