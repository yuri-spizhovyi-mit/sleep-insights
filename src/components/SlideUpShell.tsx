import type { ReactNode } from "react";
import { useSlideUp } from "../hooks/useSlideUp";

interface SlideUpShellProps {
  children: ReactNode;
}

function SlideUpShell({ children }: SlideUpShellProps) {
  const ref = useSlideUp();
  return <div ref={ref}>{children}</div>;
}

export default SlideUpShell;
