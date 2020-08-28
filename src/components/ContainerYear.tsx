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

const ContainerYear: React.SFC<YearInfoProps> = ({ data }) => {
  const [yVal, setYVal] = useState<YearInfo[] | null>();

  var yearValues;

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

  if (yVal) {
    yearValues = yVal!.map((val) => (
      <YearCard key={val.Year} Year={val.Year} Value={val.Value} />
    ));
  } else {
    yearValues = "";
  }

  return (
    <div className="container">
      <div className="title-container">
        <h2>Videos seen each year</h2>
      </div>
      <div className="content-container">{yearValues}</div>
    </div>
  );
};

export default ContainerYear;
