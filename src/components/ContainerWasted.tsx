import * as React from "react";
import { useState, useEffect } from "react";
import { getClassBtn, getClassContainer } from "./Container";
import Card from "./Card";
import Note from "./Note";

export interface ContainerWastedProps {
  totalS: number;
}

const ContainerWasted: React.SFC<ContainerWastedProps> = ({ totalS }) => {
  const [duration, setDuration] = useState<number>(0);
  const [open, setOpen] = useState<Boolean>(true);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setDuration(totalS);
  }, [totalS]);
  return (
    <div className={getClassContainer(open)}>
      <div className="title-container">
        <h2>Time Wasted</h2>
        <button className={getClassBtn(open)} onClick={() => handleClick()}>
          {open ? "-" : "+"}
        </button>
      </div>
      <div className="content-container">
        <Card key={"seconds"} title={"seconds"} value={duration} />
        <Card
          key={"minutes"}
          title={"minutes"}
          value={Math.round((duration * 10) / 60) / 10}
        />
        <Card
          key={"hours"}
          title={"hours"}
          value={Math.round((duration * 10) / 3600) / 10}
        />
        <Card
          key={"days"}
          title={"days"}
          value={Math.round((duration * 10) / (3600 * 24)) / 10}
        />
      </div>
      <Note
        value={
          "Values computed are only an approximation. As of right now, we cannot see how long each video has been watched, so the numbers reflect the case where the user was watching every single video he cliked on, until the end, at base speed (x1 time multiplier)."
        }
      />
    </div>
  );
};

export default ContainerWasted;
