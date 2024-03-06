"use client";

import useObHeightChange from "@Hooks/common/useObHeightChange";
import useWindowResize from "@Hooks/common/useWindowSize";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

export type tLogoColor = "white" | "green" | "brow";
export type tHeaderColor = "white" | "darkGrey2";

interface IUiContext {
  logoColor: string;
  scrollHeight: number;
  setLogoColor: React.Dispatch<SetStateAction<tLogoColor>>;
  setFramesLoaded: React.Dispatch<SetStateAction<number>>;
  headerColor: string;
  setHeaderColor: React.Dispatch<SetStateAction<tHeaderColor>>;
  framesLoaded: number;
  isReturnHome: boolean;
  setIsReturnHome: React.Dispatch<SetStateAction<boolean>>;
}

export const UiContext = createContext<IUiContext>({
  scrollHeight: 0,
  logoColor: "white",
  setLogoColor: (_) => null,
  setFramesLoaded: (_) => null,
  headerColor: "white",
  framesLoaded: 0,
  setHeaderColor: (_) => null,
  isReturnHome: false,
  setIsReturnHome: (_) => null,
});

function scrollRestoration(): void {
  window.scrollTo(0, 0);
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
}

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const { scrollHeight } = useObHeightChange();
  const [logoColor, setLogoColor] = useState<tLogoColor>("white");
  const [framesLoaded, setFramesLoaded] = useState<number>(0);
  const [headerColor, setHeaderColor] = useState<tHeaderColor>("white");
  const pathName = usePathname();
  const { width, isMobile } = useWindowResize();
  const [isReturnHome, setIsReturnHome] = useState(true);

  useEffect(() => {
    scrollRestoration();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [scrollHeight, width, isMobile]);

  useEffect(() => {
    switch (pathName) {
      case "/":
        setLogoColor("white");
        setHeaderColor("white");
        break;
      default:
        setLogoColor("green");
        if (pathName === "/story/detail") {
          setHeaderColor("darkGrey2");
        } else {
          setHeaderColor("white");
        }
        break;
    }
  }, [pathName]);

  const contextValues = useMemo(() => {
    return {
      scrollHeight,
      logoColor,
      setLogoColor,
      setFramesLoaded,
      headerColor,
      setHeaderColor,
      framesLoaded,
      isReturnHome,
      setIsReturnHome,
    };
  }, [
    scrollHeight,
    logoColor,
    setLogoColor,
    setFramesLoaded,
    headerColor,
    setHeaderColor,
    framesLoaded,
    isReturnHome,
    setIsReturnHome,
  ]);

  return (
    <UiContext.Provider value={contextValues}>{children}</UiContext.Provider>
  );
};

export default function useUiContext(): IUiContext {
  return useContext(UiContext);
}
