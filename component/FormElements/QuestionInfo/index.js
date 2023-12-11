import React from "react";

import style from "./style.module.css";

export default function QuestionInfo(props) {
  return (
    <>
      <div
        className={`${style.qustnInfo}`}
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></div>
    </>
  );
}
