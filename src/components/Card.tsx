import * as React from "react";
// import { Component } from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export interface CardProps {
  title: string | number;
  value: string | number;
  unit?: string;
  big?: boolean;
}

export const Card: React.SFC<CardProps> = ({
  title,
  value,
  unit = "",
  big = false,
}) => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      scale: 0.9,
      opacity: 1,
      duration: 1000,
      delay: 100,
    });
    sr.reveal(".card");
  });

  const getClass = () => {
    if (big) {
      return "card big";
    } else {
      return "card";
    }
  };
  return (
    <span className={getClass()}>
      <div className="card-title">{title}</div>
      <div className="card-content">
        {value} {unit}
      </div>
    </span>
  );
};

export default Card;
