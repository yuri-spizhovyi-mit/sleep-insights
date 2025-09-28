import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { stressData } from "../data/charts-data";
import AnimatedTitle from "./AnimatedTitle";
import SlideUpShell from "./SlideUpShell";

function StressBySleepChart() {
  return (
    <section
      id="chart-section"
      className="py-10 min-h-[100dvh] overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-[50rem] w-full px-4 text-center">
        <AnimatedTitle title="Stress levels by sleep duration" />

        <SlideUpShell>
          <div className="w-full h-80 sm:h-100  rounded-2xl backdrop-blur-xl bg-white/10 shadow-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stressData}>
                <XAxis dataKey="sleep" stroke="#e9d5ff" tick={{ dy: 12 }} />
                <YAxis stroke="#e9d5ff" tick={{ dx: -12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(30, 27, 75, 0.9)",
                    border: "1px solid #a78bfa",
                    borderRadius: "0.5rem",
                  }}
                  cursor={false}
                />
                <Bar dataKey="stress" fill="#f472b6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 mx-auto  max-w-xl text-center text-purple-100 text-lg">
            💡 Insight: Adults sleeping less than 6h report{" "}
            <span className="font-bold">2× higher stress</span> than those with
            7–8h sleep.
          </div>
        </SlideUpShell>
      </div>
    </section>
  );
}

export default StressBySleepChart;
