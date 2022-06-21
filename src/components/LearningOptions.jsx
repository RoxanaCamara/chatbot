import React from "react";
import "./styles.css";

const LearningOptions = (props) => {
  const { options} = props
  
  const optionsMarkup = options(props.actionProvider).map((option) =>(
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    )
  );

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
