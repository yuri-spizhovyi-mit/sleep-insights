import Hero from "./components/Hero";
import SleepByAgeChart from "./components/SleepByAgeChart";
import StressBySleepChart from "./components/StressBySleepChart";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import AppView from "./components/AppView";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Header from "./components/Header";
// import AppLoader from "./components/AppLoader";

export default function App() {
  useSmoothScroll();

  return (
    <>
      {/* <AppLoader /> */}
      <AppView>
        <Header />
        <Hero />
        <SleepByAgeChart />
        <StressBySleepChart />
        <CallToAction />
        <Footer />
      </AppView>
    </>
  );
}
