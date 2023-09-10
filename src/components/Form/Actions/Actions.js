import React from "react";

import Button from "../../UI/Button/Button";

import styles from "./Actions.module.css";

const Actions = (props) => {
  return (
    <p className={styles.actions}>
      <Button onClick={props.resetAllInput} type="reset" isAlt={true}>
        Reset
      </Button>
      <Button type={props["submit"]} isAlt={false}>
        Calculate
      </Button>
    </p>
  );
};

export default Actions;
