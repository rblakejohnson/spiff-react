import React, { useState, useEffect } from "react";
import Exercise from "../exercise/Exercise";
import Button from "./button";
import Progress from "./progress";

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
  const [value, setValue] = useState(0);
  const [showProgress, setShowProgress] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isLoading && value <= 90) {
        setValue((state) => state + 90 / 15);
      }
    }, 1000);

    if (value >= 100) {
      clearInterval(intervalId);
    }


    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading, value]);

  return (
    <div>
      <Progress value={value} className={showProgress ? "" : "fadeIn"} />
      <div className="button-group">
        <Button
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
          }}
        >
          {isLoading ? "Loading..." : "Start Request"}
        </Button>
        {isLoading && (
          <Button
            color="red"
            onClick={() => {
              setIsLoading(false);
              setValue(100);
              setTimeout(() => {
                setShowProgress(false);
              }, 3000);
            }}
          >
            Finish Request
          </Button>
        )}
      </div>
    </div>
  );
};
