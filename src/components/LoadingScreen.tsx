import { useEffect, useLayoutEffect, useState } from "react";
import { LogoMark } from "./Logo";

export function LoadingScreen() {
  const [gone, setGone] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("stilo_loaded") === "1") {
      setGone(true);
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("stilo_loaded") === "1") return;

    const hide = setTimeout(() => setVisible(false), 2000);
    const remove = setTimeout(() => {
      sessionStorage.setItem("stilo_loaded", "1");
      setGone(true);
    }, 2900);

    return () => {
      clearTimeout(hide);
      clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-[900ms] ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div
        className={`transition-all duration-700 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <LogoMark className="h-24 w-auto md:h-32" />
      </div>
    </div>
  );
}
