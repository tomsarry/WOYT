import * as React from "react";
import { useState } from "react";
import { getClassContainer, getClassBtn } from "./Container";
import Card from "./Card";

export interface ContainerGeneralProps {
  nbVideo: number;
  missingLinks: number;
  nbYears: number;
}

const ContainerGeneral: React.SFC<ContainerGeneralProps> = ({
  nbVideo,
  missingLinks,
  nbYears,
}) => {
  const [open, setOpen] = useState<Boolean>(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const getGeneralContent = () => {
    const titles = [
      "Number of videos found",
      "Missing links in total",
      "Age of account",
    ];
    const values = [nbVideo, missingLinks, nbYears];

    for (let i = 0; i < titles.length; i++) {}

    const display = titles.map((title, index) => (
      <Card
        key={index}
        title={title}
        value={values[index]}
        big={true}
        unit={index === 2 ? "years" : ""}
      />
    ));

    return display;
  };

  return (
    <div className={getClassContainer(open)}>
      <div className="title-container">
        <h2>Videos seen each year</h2>
        <button className={getClassBtn(open)} onClick={() => handleClick()}>
          {open ? "-" : "+"}
        </button>
      </div>
      <div className="content-container">{getGeneralContent()}</div>
    </div>
  );
};

export default ContainerGeneral;
