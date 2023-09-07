import React, { useState } from "react";

import Label from "../UI/Input/Label";
import Input from "../UI/Input/Input";
import Actions from "./Actions/Actions";

import styles from "./Form.module.css";

const Form = (props) => {
  const initialUserInput = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <Label htmlFor="current-savings">Current Savings ($)</Label>
          <Input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <Label htmlFor="yearly-contribution">Yearly Savings ($)</Label>
          <Input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <Label htmlFor="expected-return">
            Expected Interest (%, per year)
          </Label>
          <Input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <Label htmlFor="duration">Investment Duration (years)</Label>
          <Input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <Actions resetAllInput={resetHandler} calculateAllInput={"submit"} />
    </form>
  );
};

export default Form;
