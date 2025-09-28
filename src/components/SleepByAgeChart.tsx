import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { sleepData } from "../data/charts-data";
import AnimatedTitle from "./AnimatedTitle";
import SlideUpShell from "./SlideUpShell";

function SleepByAgeChart() {
  return (
    <section
      id="sleep-chart"
      className="py-18 min-h-[100dvh] flex items-center justify-center"
    >
      <div className="max-w-[50rem] w-full px-4">
        <AnimatedTitle title="How sleep changes with age" />
        <SlideUpShell>
          <div className="relative z-20 h-80 sm:h-100 w-full rounded-2xl backdrop-blur-xl  bg-white/10 shadow-lg p-4 ">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sleepData}>
                <XAxis dataKey="age" stroke="#e9d5ff" tick={{ dy: 12 }} />
                <YAxis domain={[5, 8]} stroke="#e9d5ff" tick={{ dx: -12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(30, 27, 75, 0.9)",
                    border: "1px solid #a78bfa",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="women"
                  stroke="#c084fc"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  connectNulls
                />
                <Line
                  type="monotone"
                  dataKey="men"
                  stroke="#34d399"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 mx-auto max-w-xl text-center text-purple-100 text-lg">
            💡 Insight: Women aged 40–50 average{" "}
            <span className="font-bold">6.2h</span> of sleep — below the healthy
            7–8h range.
          </div>
        </SlideUpShell>
      </div>
    </section>
  );
}

export default SleepByAgeChart;
