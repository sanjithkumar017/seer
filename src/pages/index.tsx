import { getPayDay } from "@/utils/helpers";
import { useTimer } from "@/components/hooks/use-timer";

export default function Home() {
  const [payDayString, payDayMilliseconds] = getPayDay();
  const timeRemaining = useTimer(payDayMilliseconds as number);

  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <h1>
        <b>Upcoming Salary Date is -</b> {payDayString}{" "}
      </h1>
      <h2>
        <b>Time Remaining -</b> <span>{timeRemaining.days} Days</span>{" "}
        <span>{timeRemaining.hours} Hours</span>{" "}
        <span>{timeRemaining.minutes} Minutes</span>{" "}
        <span>{timeRemaining.seconds} Seconds</span>{" "}
      </h2>
    </main>
  );
}
