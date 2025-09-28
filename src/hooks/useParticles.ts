// src/hooks/useParticles.ts
import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import { useMobileSyncSize } from "./useMobileSyncSize";

export function useParticles() {
  const isMobile = useMobileSyncSize();

  useEffect(() => {
    (async () => {
      await loadAll(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: isMobile ? 5 : 25 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1.5 },
            links: { enable: true, distance: 400, opacity: 0.4, width: 1 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
        },
      });
    })();
  }, [isMobile]);
}
