import YearCard from "./YearCard";

import ScrollReveal from "scrollreveal";
import React, { useState, useEffect } from "react";

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
    setYVal(data);
    setOpen(!open);
  };

  const getClassBtn = () => {
    if (open) {
      return "btn-resize less";
    } else {
      return "btn-resize more";
    }
  };

  const getClassContainer = () => {
    if (open) {
      return "content-container opened";
    } else {
      return "content-container closed";
    }
  };

  const getYearInfo = () => {
    if (yVal) {
      const yearValues = yVal!.map((val) => (
        <YearCard key={val.Year} Year={val.Year} Value={val.Value} />
      ));
      return yearValues;
    } else {
      return "";
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
    <div className="container">
      <div className="title-container">
        <h2>Videos seen each year</h2>
        <button className={getClassBtn()} onClick={() => handleClick()}>
          {open ? "-" : "+"}
        </button>
      </div>
      <div className={getClassContainer()}>{getYearInfo()}</div>
    </div>
  );
};

export default ContainerYear;
