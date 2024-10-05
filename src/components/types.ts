export enum EventState {
  past,
  current,
  future,
}

export type PayDayProps = {
  payDayString: string | number;
  timeRemaining?: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  eventState: EventState;
};
