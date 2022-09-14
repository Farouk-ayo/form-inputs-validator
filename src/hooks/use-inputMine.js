import { useState } from "react";

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsRight = validate(enteredValue);
  const errorOccur = !enteredValue && isTouched;

  const enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const enterInputTouched = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: valueIsRight,
    errorOccur,
    enteredValueHandler,
    enterInputTouched,
    reset,
  };
};

export default useInput;
