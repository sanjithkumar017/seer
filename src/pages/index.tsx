import { getPayDay } from "@/utils/helpers";
import { useTimer } from "@/components/hooks/use-timer";
import Title from "@/components/title";
import PayDay from "@/components/pay-day";
import { EventState } from "@/components/types";

export default function Home() {
  const [payDayStringEarlier] = getPayDay(-1);
  const [payDayString, payDayMilliseconds] = getPayDay(0);
  const [payDayStringFuture] = getPayDay(1);
  const timeRemaining = useTimer(payDayMilliseconds as number);

  return (
    <main className={`flex align-center justify-space-around h-100`}>
      <Title />
      <section className="flex align-center justify-space-around flex-column h-100">
        <PayDay
          payDayString={payDayStringEarlier}
          eventState={EventState.past}
        />
        <PayDay
          payDayString={payDayString}
          timeRemaining={timeRemaining}
          eventState={EventState.current}
        />
        <PayDay
          payDayString={payDayStringFuture}
          eventState={EventState.future}
        />
      </section>
    </main>
  );
}
