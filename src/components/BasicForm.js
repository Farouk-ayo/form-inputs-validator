import useInput from "../hooks/use-inputMine";

const BasicForm = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    errorOccur: nameInputHasError,
    enteredValueHandler: nameChangedHandler,
    enterInputTouched: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredFirst,
    isValid: enteredFirstIsValid,
    errorOccur: firstInputHasError,
    enteredValueHandler: firstChangeHandler,
    enterInputTouched: firstBlurHandler,
    reset: resetFirstInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    errorOccur: emailInputHasError,
    enteredValueHandler: emailChangeHandler,
    enterInputTouched: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredFirstIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail, enteredFirst);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetFirstInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const firstInputClasses = firstInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Pls enter First name.</p>
        )}
      </div>
      <div className={firstInputClasses}>
        <label htmlFor="name">First name</label>
        <input
          type="text"
          id="name"
          onChange={firstChangeHandler}
          onBlur={firstBlurHandler}
          value={enteredFirst}
        />
        {firstInputHasError && (
          <p className="error-text">Pls enter a Last name.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
