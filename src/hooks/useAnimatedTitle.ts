import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useAnimatedTitle() {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    function () {
      const container = ref.current;
      if (!container) return;

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "center 90%",
          end: "center 90%",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.fromTo(
        ".animated-word",
        {
          opacity: 0,
          rotationX: -90,
          y: 50,
        },
        {
          duration: 0.5,
          opacity: 1,
          rotationX: 0,
          y: 0,
          stagger: 0.08,
          ease: "back.out(3)",
        }
      );
    },
    { scope: ref, dependencies: [] }
  );

  return ref;
}
