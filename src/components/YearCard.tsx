import * as React from "react";
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export interface YearCardProps {
  Year: number;
  Value: number;
}

export const YearCard: React.SFC<YearCardProps> = ({ Year, Value }) => {
  // const [val, setVal] = useState<YearCardProps>();

  useEffect(() => {
    // setVal({ Year, Value });
    const sr = ScrollReveal({
      reset: true,
      scale: 0.9,
      opacity: 1,
      duration: 1000,
      origin: "bottom",
      distance: "20px",
      delay: 100,
    });
    sr.reveal(".yearCard");
  });
  return (
    <span className="yearCard">
      <div className="yearCard-title">{Year}</div>
      <div className="yearCard-content">{Value}</div>
    </span>
  );
};

export default YearCard;
