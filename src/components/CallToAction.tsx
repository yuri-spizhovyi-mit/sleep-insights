import { useParallaxEffect } from "../hooks/useParalaxEffect";

function CallToAction() {
  const { containerRef, targetRef, handleMouseMove, handleMouseLeave } =
    useParallaxEffect<HTMLImageElement>({
      tiltX: -8,
      tiltY: 8,
      perspective: 1200,
      resetOnLeave: true,
      isTranslating: true,
    });

  return (
    <section className="py-20 footer z-100">
      <div className="px-4" ref={containerRef}>
        <div
          ref={targetRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative z-20 select-none cursor-pointer max-w-3xl mx-auto w-full py-20 rounded-2xl bg-gradient-to-t from-purple-700 to-indigo-800 backdrop-blur-xl p-6 shadow-xl transform  text-center"
        >
          <h3 className="text-4xl font-bold mb-9">✨ Takeaway</h3>
          <p className="text-lg max-w-lg mx-auto leading-relaxed text-purple-100">
            Sleeping just <span className="font-bold">1 extra hour</span> per
            night can improve mood, reduce stress, and support long-term health
            — helping you feel as energetic as you did in your 20s.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
