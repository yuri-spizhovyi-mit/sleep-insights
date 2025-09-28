import { type MouseEvent } from "react";

export function useAnimateButton() {
  function animateShade(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  }

  function resetShade(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.setProperty("--x", "50%");
    e.currentTarget.style.setProperty("--y", "50%");
  }

  return { animateShade, resetShade };
}
