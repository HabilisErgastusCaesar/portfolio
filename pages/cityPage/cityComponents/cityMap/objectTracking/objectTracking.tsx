import React, { useEffect } from 'react';

import { useCityContext } from '../../cityContext/cityContext';
import { calculatePosition } from '../sharedFunction/calculatePosition'; 

export const ObjectTracking = ({ mapRef }) => {
    const { contextValue } = useCityContext();

    let collide = true;
    let calculatedPosition = { top: 0, left: 0 };

    useEffect(() => {
        const handleMouseMove = (e) => {
            contextValue.setMousePosition({ x: e.clientX, y: e.clientY });
        };

        if (contextValue.trackingObject) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [contextValue.trackingObject]);

    const checkCollision = () => {
        let isColliding = true; 
        if (contextValue.placedCivilBuildings && contextValue.placedCivilBuildings.length > 0 && contextValue.mousePosition) {
            const { top, left } = calculatedPosition;
            isColliding = contextValue.placedCivilBuildings.some((item) => {
                const borderRight = item.x + parseInt(item.width);
                return item.x > left && item.x < left + 80;
            });
        }
        collide = !isColliding; 
        return isColliding ? "rgba(240, 46, 46, 0.4) 5px 5px" : "rgba(46, 240, 88, 0.4) 5px 5px";
    };

    const placingCivilBuilding = () => {
        const payment = () => {
            const state = contextValue.trackingObject.level[contextValue.trackingObject.currentLevel]
            let check = []
            let payment = []
            for (const [key, value] of Object.entries(state.buildNeeds)) {
                if (contextValue.resources[key][0] >= value) {
                    check.push(true)
                    payment.push({key, value})
                } else {check.push(false)}
            }
            if (check.includes(false)) {
                return false
            } else {
                paying(payment)
                return true
            }
        }

        const paying = (payment) => {
            payment.map((item) => {
              const newValue = contextValue.resources[item.key][0] - item.value;
              contextValue.setResources((prev) => ({
                ...prev,
                [item.key]: [newValue, true],
              }));
            });
        }
        
        const result = payment()
        if (result) {
            if (collide) {
                contextValue.setPlacedCivilBuildings((prev) => [
                    ...prev,
                    {
                        x: calculatePosition(contextValue.mousePosition.x,contextValue.mousePosition.y ,mapRef ,contextValue.trackingObject).left,
                        y: calculatePosition(contextValue.mousePosition.x,contextValue.mousePosition.y ,mapRef ,contextValue.trackingObject).top,
                        ...contextValue.trackingObject,
                    },
                ]);
                contextValue.setTrackingObject(null);
            }
        } else {
            contextValue.setTrackingObject(null);
        }
    };

    const placingCarrisonAmry = () => {
        contextValue.setCarrisonArmy((prev) => ([
            ...prev,
            {x: calculatePosition(contextValue.mousePosition.x,contextValue.mousePosition.y ,mapRef ,contextValue.trackingObject).left,
            y: calculatePosition(contextValue.mousePosition.x,contextValue.mousePosition.y ,mapRef ,contextValue.trackingObject).top,
            ...contextValue.trackingObject,}
        ]));
    }
    
    const placing = () => {
        if (contextValue.trackingObject.type === "civil") {
            placingCivilBuilding();
        } else if (contextValue.trackingObject.type === "carrison") {
            placingCarrisonAmry();
        }
    };

    const position = calculatePosition(contextValue.mousePosition.x,contextValue.mousePosition.y ,mapRef ,contextValue.trackingObject);
    return (
        <>
            {contextValue.trackingObject && (
                contextValue.trackingObject.type === "civil" ? (
                <div
                    className="trackingButton"
                    style={{
                        position: 'absolute',
                        top: position.top,
                        left: position.left,
                        width: contextValue.trackingObject.width,
                        height: contextValue.trackingObject.height,
                        backgroundColor: "red",
                        boxShadow: checkCollision(),
                        zIndex: 10,
                    }}
                    onClick={placing}
                >
                </div>
                ):(
                    contextValue.trackingObject.type === "carrison" &&
                    <div
                    className="trackingButton"
                    style={{
                        position: 'absolute',
                        top: position.top,
                        left: position.left,
                        width: "40px",
                        height: "40px",
                        backgroundColor: "red",
                        boxShadow: checkCollision(),
                        zIndex: 10,
                    }}
                    onClick={placing}
                >
                </div>
                )
            )
            }
        </>
    );
};
