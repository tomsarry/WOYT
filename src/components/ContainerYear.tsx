// import * as React from "react";
import YearCard from "./YearCard";
// import ScrollReveal from "scrollreveal";
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
  Open: Boolean;
  Info?: YearInfo[];
};

const ContainerYear: React.SFC<YearInfoProps> = ({ data }) => {
  const [yVal, setYVal] = useState<ContainerState>({ Open: true });

  const handleClick = () => {
    setYVal({ Open: !yVal.Open, Info: data });
  };

  const getClassBtn = () => {
    if (yVal.Open) {
      return "btn-resize less";
    } else {
      return "btn-resize more";
    }
  };

  const getClassContainer = () => {
    if (yVal.Open) {
      return "content-container opened";
    } else {
      return "content-container closed";
    }
  };

  const getYearInfo = () => {
    if (yVal.Info) {
      const yearValues = yVal.Info!.map((val) => (
        <YearCard key={val.Year} Year={val.Year} Value={val.Value} />
      ));
      return yearValues;
    } else {
      return "";
    }
  };

  useEffect(() => {
    setYVal({ Info: data, Open: yVal.Open });
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
          {yVal!.Open ? "-" : "+"}
        </button>
      </div>
      <div className={getClassContainer()}>{getYearInfo()}</div>
    </div>
  );
};

export default ContainerYear;
