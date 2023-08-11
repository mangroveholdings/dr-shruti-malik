import React, { FC } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

interface CounterProps {
  end: number;
  decimals?: number;
}

const Counter: FC<CounterProps> = ({ end, decimals }) => {
  return (
    <CountUp end={end ? end : 100} duration={3} decimals={decimals ? decimals : 0}>
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span className="count-text" data-from="0" data-to={end} ref={countUpRef}>
            {end}
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
