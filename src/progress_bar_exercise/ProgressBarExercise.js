import React from "react";
import Exercise from "../exercise/Exercise";
import Button from "./button"

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
      Hey #00c2a6
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return (
    <div>
      <Button>Start Request</Button>
    </div>
  );
};
