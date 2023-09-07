import React from "react";

import styles from "./GroupsInput.module.css";

const GroupsInput = (children) => {
  return <div className={styles["input-group"]}>{children}</div>;
};

export default GroupsInput;
