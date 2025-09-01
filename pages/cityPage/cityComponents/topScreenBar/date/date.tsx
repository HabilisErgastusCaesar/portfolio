import { useState, useRef, useEffect } from "react";

export const Date = () => {
    const statusBarRef = useRef(null);
    const [time, setTime] = useState({
        day: 1,
        week: 1,
        month: 1,
        year: 1,
    });
    const [startTime, setStartTime] = useState(performance.now());

    useEffect(() => {
        const duration = 15 * 60 * 1000; // 15 minutes in milliseconds
        const startTime = performance.now(); // Get the current time
        let animationFrameId; // Store the animation frame ID
        const updateStatusBar = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            if (statusBarRef.current) {
                statusBarRef.current.style.width = `${progress * 100}%`;
            }
            if (progress < 1) {
                animationFrameId = requestAnimationFrame(updateStatusBar); // Update the animation frame ID
            } else {
                setTime((prevTime) => {
                    let { day, week, month, year } = prevTime;
                    day += 1;
                    if (day > 7) {
                        day = 1;
                        week += 1;
                        if (week > 4) {
                            week = 1;
                            month += 1;
                            if (month > 12) {
                                month = 1;
                                year += 1;
                            }
                        }
                    }
                    return { day, week, month, year };
                });
                setStartTime(performance.now()); // Reset the start time
            }
        };
        animationFrameId = requestAnimationFrame(updateStatusBar);
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [startTime]);
    return(<div className="resource">
    <div className='daysWeeksYears'>
    <div className='head-status-bar'>
    <div className='status-bar-container'>
        <div ref={statusBarRef} className='status-bar'></div>
    </div>
        <h3>day </h3>
        <h3>{time.day}</h3>
        <h3>week </h3>
        <h3>{time.week}</h3>
        <h3>month </h3>
        <h3>{time.month}</h3>
        <h3>year </h3>
        <h3>{time.year}</h3>
    </div>
    </div>
    </div>)
}