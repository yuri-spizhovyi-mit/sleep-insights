import AnimatedButton from "./AnimatedButton";

function Hero() {
  return (
    <section className="hero sm:static flex  justify-center items-center h-screen text-center px-4 z-0">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Sleep & Well-Being Insights
        </h1>

        <p className="mt-4 text-lg md:text-xl text-purple-200 max-w-xl mx-auto">
          A prototype empowering women 40+ to take control of their sleep health
        </p>

        <AnimatedButton target="#sleep-chart">
          Explore Insights ↓
        </AnimatedButton>
      </div>
    </section>
  );
}

export default Hero;
