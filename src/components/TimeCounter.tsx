import { useEffect, useState } from "react";
import { HeartIcon } from "./HeartIcon";

const START = new Date(2023, 9, 10, 9, 54, 0); // 10 de outubro de 2023, 09:54

type Elapsed = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calcElapsed = (from: Date, to: Date): Elapsed => {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  let hours = to.getHours() - from.getHours();
  let minutes = to.getMinutes() - from.getMinutes();
  let seconds = to.getSeconds() - from.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
};

export const TimeCounter = () => {
  const [elapsed, setElapsed] = useState<Elapsed>(() =>
    calcElapsed(START, new Date()),
  );

  useEffect(() => {
    const id = setInterval(
      () => setElapsed(calcElapsed(START, new Date())),
      1000,
    );
    return () => clearInterval(id);
  }, []);

  const items: { label: string; value: number }[] = [
    { label: "anos", value: elapsed.years },
    { label: "meses", value: elapsed.months },
    { label: "dias", value: elapsed.days },
    { label: "horas", value: elapsed.hours },
    { label: "minutos", value: elapsed.minutes },
    { label: "segundos", value: elapsed.seconds },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12 animate-fade-up">
          <p className="font-script text-2xl text-primary mb-2">
            o nosso tempo
          </p>
          <h2 className="text-4xl md:text-5xl text-foreground">
            Contando cada segundo desde 10 de outubro de 2023
          </h2>
          <div className="flex justify-center mt-6">
            <div className="h-px w-24 bg-gradient-gold" />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 animate-fade-up">
          {items.map((it) => (
            <div
              key={it.label}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-soft"
            >
              <div className="text-3xl md:text-5xl font-medium text-gradient-gold tabular-nums">
                {String(it.value).padStart(2, "0")}
              </div>
              <div className="mt-2 text-xs md:text-sm text-foreground/70 uppercase tracking-wider">
                {it.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 text-foreground/70">
          <HeartIcon className="w-4 h-4 text-primary animate-shimmer" />
          <p className="font-script text-xl">e que venham muitos mais ♡</p>
          <HeartIcon className="w-4 h-4 text-primary animate-shimmer" />
        </div>
      </div>
    </section>
  );
};
