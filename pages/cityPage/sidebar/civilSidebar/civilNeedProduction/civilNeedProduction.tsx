import { useState, useEffect, useRef, useMemo } from "react";

export const CivilNeedProduction = ({ item }) => {
  const productionStatusBarRef = useRef(null);
  const needsStatusBarRef = useRef(null);
  const [startTime, setStartTime] = useState(performance.now());
  const [shouldRunEffect, setShouldRunEffect] = useState(false);
  const [valueIteration, setValueIteration] = useState()

  const shouldRunEffectValue = useMemo(() => {
    return item.level[item.currentLevel] && item.level[item.currentLevel].production;
  }, [item.level, item.currentLevel]);

  useEffect(() => {
    setShouldRunEffect(shouldRunEffectValue);
  }, [shouldRunEffectValue]);

  useEffect(() => {
    if (shouldRunEffect) {
       const duration = 60 * 1000;
       let animationFrameId;
       const updateStatusBar = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        if (productionStatusBarRef.current) {
          productionStatusBarRef.current.style.width = `${progress * 100}%`;
        }
        if (needsStatusBarRef.current) {
          needsStatusBarRef.current.style.width = `${progress * 100}%`;
        }
        if (progress < 1) {
          requestAnimationFrame(updateStatusBar);
        } else {
          setStartTime(performance.now());
        }
      };

      requestAnimationFrame(updateStatusBar);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [shouldRunEffect, startTime]);

  const meat = () => {
    if (item.level[item.currentLevel].needs.meat.need) {
        const meat = item.level[item.currentLevel].needs.meat.need
        return meat
    } else {
        const meat = 0
        return meat
    }
  }

  const grain = () => {
    if (item.level[item.currentLevel].needs.grain.need) {
        const grain = item.level[item.currentLevel].needs.grain.need
        return grain
    } else {
        const grain = 0
        return grain
    }
  }

  const hide_clothing = () => {
    if (item.level[item.currentLevel].needs["hide clothing"].need) {
        const hide_clothing = item.level[item.currentLevel]["hide clothing"].hide_clothing.need
        return hide_clothing
    } else {
        const hide_clothing = 0
        return hide_clothing
    }
  }

  interface NeedsObject {
    hide_clothing: typeof hide_clothing;
    meat: typeof meat;
    grain: typeof grain;
  }

  return (
    <>
      {item.level[item.currentLevel] && (
        <>
          <div className="civil-container">
            {item.level[item.currentLevel].needs && (
              <>
                <h4>needs</h4>
                {Object.entries(
                  item.level[item.currentLevel].needs as NeedsObject
                ).map(([key, value]) => (
                  <span key={key} className="resource-item">
                    <p>{key}</p>
                    <p>{value.need}</p>
                  </span>
                ))}
                <div className="status-bar-container">
                  <div ref={productionStatusBarRef} className="status-bar"></div>
                </div>
              </>
            )}
          </div>
          <div className="civil-container">
            {item.level[item.currentLevel].production && (
              <>
                <h4>production</h4>
                {Object.entries(
                  item.level[item.currentLevel].production
                ).map(([key, value]) => (
                  <span key={key} className="resource-item">
                    <p>{key}</p>
                    <p>production {value}</p>
                  </span>
                ))}
                <div className="status-bar-container">
                  <div ref={needsStatusBarRef} className="status-bar"></div>
                </div>
              </>)}
          </div>
    </>)}
    </>
  );
};

