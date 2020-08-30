import * as React from "react";
import { getClassContainer, getClassBtn } from "./Container";
import { useEffect, useState } from "react";
import Card from "./Card";

export interface ContainerSampleProps {
  nbSample: number;
  brokenLinksSample: number;
  durationSample: number;
}

const ContainterSample: React.SFC<ContainerSampleProps> = ({
  nbSample,
  brokenLinksSample,
  durationSample,
}) => {
  const [open, setOpen] = useState<Boolean>(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const [info, setInfo] = useState<ContainerSampleProps>({
    nbSample: 0,
    brokenLinksSample: 0,
    durationSample: 0,
  });

  useEffect(() => {
    setInfo({
      nbSample: nbSample,
      brokenLinksSample: brokenLinksSample,
      durationSample: durationSample,
    });
  }, [nbSample]);

  const getSampleContent = () => {
    const titles = [
      "Size of sample",
      "Missing links in the sample",
      "duration of the sample",
    ];
    const values = [nbSample, brokenLinksSample, durationSample];

    for (let i = 0; i < titles.length; i++) {}

    const display = titles.map((title, index) => (
      <Card
        title={title}
        value={values[index]}
        big={true}
        unit={index === 2 ? "seconds" : ""}
      />
    ));

    return display;
  };

  return (
    <div className={getClassContainer(open)}>
      <div className="title-container">
        <h2>Advanced information about the sampling</h2>
        <button className={getClassBtn(open)} onClick={() => handleClick()}>
          {open ? "-" : "+"}
        </button>
      </div>
      <div className="content-container">
        {info.nbSample ? getSampleContent() : ""}
      </div>
    </div>
  );
};

export default ContainterSample;
