import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(t);
  }, []);

  async function handleSkip() {
    setClicked(true);
    const { initialFX } = await import("./utils/initialFX");
    setTimeout(() => {
      if (initialFX) initialFX();
      setIsLoading(false);
    }, 350);
  }

  useEffect(() => {
    if (percent >= 100 && !loaded) {
      const t1 = setTimeout(() => {
        setLoaded(true);
        const t2 = setTimeout(() => setIsLoaded(true), 200);
        return () => clearTimeout(t2);
      }, 100);
      return () => clearTimeout(t1);
    }
  }, [percent, loaded]);

  useEffect(() => {
    if (isLoaded) {
      import("./utils/initialFX").then((module) => {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 150);
      });
    }
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          AB
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> Graduate Researcher</span> <span>AI/ML Enthusiast</span>
            <span> Graduate Researcher</span> <span>AI/ML Enthusiast</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
        {showSkip && (
          <button
            type="button"
            className="loading-skip"
            onClick={handleSkip}
            aria-label="Skip loading"
          >
            Skip
          </button>
        )}
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;
  let done = false;

  // Continuously tick toward 99%, slowing down as it gets higher.
  // Never reaches 100 until `loaded()` is called.
  let interval = setInterval(() => {
    if (done) return;
    const remaining = 99 - percent;
    if (remaining <= 0) return;
    // Fast at first, gradually slower — always moving
    const increment = Math.max(0.5, remaining * 0.08);
    percent = Math.min(percent + increment, 99);
    setLoading(Math.round(percent));
  }, 100);

  function clear() {
    done = true;
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      done = true;
      clearInterval(interval);
      // Quick sprint from current to 100
      const sprint = setInterval(() => {
        if (percent < 100) {
          percent = Math.min(percent + 5, 100);
          setLoading(Math.round(percent));
        } else {
          clearInterval(sprint);
          resolve(100);
        }
      }, 20);
    });
  }

  return { loaded, percent, clear };
};
