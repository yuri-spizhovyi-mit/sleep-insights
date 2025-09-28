import type { ReactNode } from "react";
import { useParticles } from "../hooks/useParticles";

interface AppViewProps {
  children: ReactNode;
}

function AppView({ children }: AppViewProps) {
  useParticles();

  return (
    <div className="relative font-sans text-white bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950 min-h-screen">
      <div id="tsparticles" className="fixed inset-0 z-0" />
      {children}
    </div>
  );
}
export default AppView;
