import React from "react";

import styles from "./GroupsInput.module.css";

const GroupsInput = (props) => {
  return (
    <div className={styles["input-group"]}>
      <p>
        <label htmlFor="">{props.children}</label>
        <input type={props.type} />
      </p>
      <p></p>
    </div>
  );
};

export default GroupsInput;
