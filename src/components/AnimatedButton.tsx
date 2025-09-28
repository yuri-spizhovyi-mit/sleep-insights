import type { ReactNode } from "react";
import { useAnimateButton } from "../hooks/useAnimateButton";

interface AnimatetButtonProps {
  children: ReactNode;
  target: string;
}

function AnimatedButton({ children, target }: AnimatetButtonProps) {
  const { animateShade, resetShade } = useAnimateButton();

  return (
    <a
      href={target}
      onMouseMove={animateShade}
      onMouseLeave={resetShade}
      className="shiny-button"
    >
      {children}
    </a>
  );
}

export default AnimatedButton;
