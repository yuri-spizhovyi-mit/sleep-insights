import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function useSlideUp() {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;

      gsap.set(container, { y: 5, scale: 0.75, visibility: "hidden" });

      gsap.to(container, {
        duration: 1,
        scale: 1,
        y: 0,
        visibility: "visible", // unhide as soon as animation starts
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
          onEnter: () => gsap.set(container, { visibility: "visible" }),
          onLeaveBack: () => gsap.set(container, { visibility: "hidden" }),
        },
      });
    },
    { scope: ref, dependencies: [] }
  );

  return ref;
}
