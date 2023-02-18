import React from "react";
import Exercise from "../exercise/Exercise";
import Button from "./button"
import Progress from "./progress"

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return (
    <div>
      <Progress id="chunky" max="100" value="70">70%</Progress>
      <Button>Start Request</Button>
    </div>
  );
};
