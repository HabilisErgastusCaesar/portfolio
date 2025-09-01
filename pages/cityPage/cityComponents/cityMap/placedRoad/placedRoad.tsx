import { useCityContext } from "../../cityContext/cityContext";

import { useEffect, useState, useRef } from "react";

export const PlacedRoad = ({mapRef}) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const squareSize = 10;
    const startPoint = useRef({ x: 0, y: 0 });
    const {contextValue} = useCityContext();
    
    const draw = (e) => {
        if (!isDrawing) return;
        addSquare(e);
    };
    
    const stopDrawing = () => {
        setIsDrawing(false);
    };
    
    const addSquare = (e) => {
        let newX = (e.clientX - mapRef.current.getBoundingClientRect().x);
        let newY = (e.clientY - mapRef.current.getBoundingClientRect().y);
        let direction = 'horizontal'; 
        if (contextValue.placedRoad.length > 0) {
            const lastSquare = contextValue.placedRoad[contextValue.placedRoad - 1];
            const deltaX = (e.clientX - mapRef.current.getBoundingClientRect().x) - startPoint.current.x;
            const deltaY = (e.clientY - mapRef.current.getBoundingClientRect().y) - startPoint.current.y;
    
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                direction = deltaX > 0 ? 'horizontal' : 'horizontal-reverse';
                newX = direction === 'horizontal' ? lastSquare.x + squareSize : lastSquare.x - squareSize;
                newY = lastSquare.y;
            } else {
                direction = deltaY > 0 ? 'vertical' : 'vertical-reverse';
                newX = lastSquare.x;
                newY = direction === 'vertical' ? lastSquare.y + squareSize : lastSquare.y - squareSize;
            }
        }
    
        const newSquare = {
            x: newX,
            y: newY,
            data: {
                name: "sand",
                speed: 1
            }
        };
    
        contextValue.setPlacedRoad((prev) => [...prev, newSquare]);
    };
    
    /*useEffect(() => {
        const handleMouseDown = (e) => {
            if (contextValue.roadTracking) {
                setIsDrawing(true);
                startPoint.current = { x: e.clientX, y: e.clientY };
                addSquare(e); 
            }
        };
    
        const handleMouseUp = () => {
            setIsDrawing(false);
        };
    
        if (contextValue.roadTracking) {
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('mouseleave', handleMouseUp);
        } else {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseleave', handleMouseUp);
            setIsDrawing(false); 
        }
    
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseleave', handleMouseUp);
            setIsDrawing(false); 
        };
    }, [contextValue.roadTracking]);*/
    return(<>
    {contextValue.placedRoad.map((square, index) => (
        <div
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            key={index}
            style={{
                position: 'absolute',
                left: square.x,
                top: square.y,
                width: '10px',
                height: '10px',
                backgroundColor: 'teal',
            }}>
        </div>
    ))}
    </>)
}