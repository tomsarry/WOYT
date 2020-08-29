import ScrollReveal from "scrollreveal";
import React, { useState, useEffect } from "react";
import { getClassBtn, getClassContainer } from "./Container";
import Card from "./Card";

export type YearInfoProps = {
  data: YearInfo[];
};

export type YearInfo = {
  Year: number;
  Value: number;
};

type ContainerState = {
  Info?: YearInfo[];
};

const ContainerYear: React.SFC<YearInfoProps> = ({ data }) => {
  const [yVal, setYVal] = useState<YearInfo[]>();
  const [open, setOpen] = useState<Boolean>(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const getYearInfo = () => {
    if (yVal) {
      const yearValues = yVal!.map((val) => (
        <Card key={val.Year} title={val.Year} value={val.Value} />
      ));
      return yearValues;
    } else {
      return "Error, no values to display.";
    }
  };

  useEffect(() => {
    setYVal(data);
    const sr = ScrollReveal({
      reset: false,
      scale: 0.9,
      opacity: 1,
      duration: 1100,
    });
    sr.reveal(".container");
  }, [data]);

  return (
    <div className={getClassContainer(open)}>
      <div className="title-container">
        <h2>Videos seen each year</h2>
        <button className={getClassBtn(open)} onClick={() => handleClick()}>
          {open ? "-" : "+"}
        </button>
      </div>
      <div className="content-container">{getYearInfo()}</div>
    </div>
  );
};

export default ContainerYear;
