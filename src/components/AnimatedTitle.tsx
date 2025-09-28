import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import { useAnimatedTitle } from "../hooks/useAnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;
}

function AnimatedTitle({ title }: AnimatedTitleProps) {
  const ref = useAnimatedTitle();

  return (
    <div
      ref={ref}
      className="text-amber-50 text-4xl md:text-5xl font-bold mb-10 flex gap-2 perspective-distant justify-center flex-wrap cursor-pointer"
    >
      {title.split(" ").map((word, index) => (
        <span
          key={index}
          className="animated-word inline-block"
          dangerouslySetInnerHTML={{ __html: word }}
        />
      ))}
    </div>
  );
}
export default AnimatedTitle;
