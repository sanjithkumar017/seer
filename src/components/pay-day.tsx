import { PayDayProps, EventState } from "./types";

const PayDay = ({ payDayString, timeRemaining, eventState }: PayDayProps) => (
  <div className="flex align-center justify-center flex-column">
    <h2
      className="b"
      style={{
        textDecoration: eventState === EventState.past ? "line-through" : "",
        transform:
          eventState === EventState.past
            ? "scale(0.7)"
            : eventState === EventState.future
              ? "scale(0.9)"
              : "",
      }}
    >
      {payDayString}
    </h2>
    {timeRemaining ? (
      <h6>
        <i>
          <span>{timeRemaining.days} Days</span>{" "}
          <span>{timeRemaining.hours} Hours</span>{" "}
          <span>{timeRemaining.minutes} Minutes</span>{" "}
          <span>{timeRemaining.seconds} Seconds</span>{" "}
        </i>
      </h6>
    ) : null}
  </div>
);

export default PayDay;
