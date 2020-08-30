import * as React from "react";
import { useState, useEffect } from "react";
import { getClassBtn, getClassContainer } from "./Container";
import Card from "./Card";
import Note from "./Note";

export interface ContainerWastedProps {
  totalS: number;
  avgDurationS: number;
}

const ContainerWasted: React.SFC<ContainerWastedProps> = ({
  totalS,
  avgDurationS,
}) => {
  const [info, setInfo] = useState<ContainerWastedProps>({
    totalS: 0,
    avgDurationS: 0,
  });
  const [open, setOpen] = useState<Boolean>(true);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setInfo({ totalS: totalS, avgDurationS: avgDurationS });
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
        <Card key={"seconds"} title={"seconds"} value={info.totalS} />
        <Card
          key={"minutes"}
          title={"minutes"}
          value={Math.round((info.totalS * 10) / 60) / 10}
        />
        <Card
          key={"hours"}
          title={"hours"}
          value={Math.round((info.totalS * 10) / 3600) / 10}
        />
        <Card
          key={"days"}
          title={"days"}
          value={Math.round((info.totalS * 10) / (3600 * 24)) / 10}
        />

        <Card
          key={"avg"}
          title={"average length"}
          value={info.avgDurationS}
          unit={"seconds"}
        />
      </div>
      <Note
        value={
          "Values computed are only an approximation. As of right now, we cannot know how long each video has been watched. Thus, the numbers reflect the case where the user was watching every single video he cliked on, until the end, at base speed (x1 time multiplier)."
        }
      />
    </div>
  );
};

export default ContainerWasted;
