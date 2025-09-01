import { useCityContext } from '../../cityContext/cityContext';
import { calculatePosition } from '../sharedFunction/calculatePosition';
import { convertToPositive } from '../sharedFunction/convertToPositive';

import React, { useState, useEffect } from 'react';

export const ObjectRoadTracking = ({ mapRef }) => {
    const { contextValue } = useCityContext();
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    
    type Point = [number, number];
    
    const [placedRoad, setPlacedRoad] = useState([
        {   
            id: "test 1",
            name:"sand",
            speed:1,
            placedRoadCoord: []
        },
    ])
    const [calculatedPosition, setCalculatedPosition] = useState<Point[]>([[ 0,  0 ],[0 , 0],[0,0]]);

    let orientation = "vertical";
    
    const calculateDraw = (e) => {
        const left = calculatePosition(e.clientX, e.clientY,mapRef, null).left
        const top = calculatePosition(e.clientX, e.clientY, mapRef, null).top
        if (!isDrawing) {
            setCalculatedPosition([[left, top],[left, top],[left, top]])
        } else if (isDrawing) {
            let newCoord: [number, number];
            
            const checkTop = convertToPositive(((100 / top) * calculatedPosition[0][1]) - 100)
            const checkLeft = convertToPositive(((100 / left) * calculatedPosition[0][0]) - 100)
            
            if (checkLeft > checkTop && checkLeft < 50 && checkTop < 50) {
                newCoord = [left, calculatedPosition[0][1]];
                orientation = "horizontal"
            } else if (checkTop > checkLeft && checkLeft < 50 && checkTop < 50) {
                newCoord = [calculatedPosition[0][0], top];
                orientation = "vertical"
            } else if (orientation === "horizontal") {
                newCoord = [left, calculatedPosition[0][1]];
            } else if (orientation === "vertical") {
                newCoord = [calculatedPosition[0][0], top];
            }
            setCalculatedPosition([[calculatedPosition[0][0], calculatedPosition[0][1]],newCoord,[left, top]])
        }
    };

    const handlePlacement = () => {
        const result = placedRoad.find((search) => search.id === contextValue.roadTracking.id)
        if (result) {
            setPlacedRoad((prevPlacedRoad) => {
                return prevPlacedRoad.map((road) => {
                    if (road.id === result.id) {
                        return {
                            ...road, 
                            placedRoadCoord: [...road.placedRoadCoord, [...calculatedPosition]], 
                        };
                    } else {
                        return road;
                    }
                });
            });
        } else {
        }
    }
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            calculateDraw(e)
        };

        const handleMouseClick = (e) => {
            setIsDrawing(!isDrawing);
            handlePlacement();
        }

        if (contextValue.roadTracking) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('click', handleMouseClick);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);
            setIsDrawing(false);
        }
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);
        };
    }, [contextValue.roadTracking, isDrawing]);

    return (<>
    {contextValue.roadTracking && 
    (isDrawing ? 
    (<svg
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
            pointerEvents: 'none',
        }}
        width="100%"
        height="100%"
    >
    <line x1={calculatedPosition[0][0]} y1={calculatedPosition[0][1]} x2={calculatedPosition[1][0]} y2={calculatedPosition[1][1]}  stroke="blue" strokeWidth="5" strokeDasharray="20, 5" />
    <line x1={calculatedPosition[1][0]} y1={calculatedPosition[1][1]} x2={calculatedPosition[2][0]} y2={calculatedPosition[2][1]}  stroke="blue" strokeWidth="5" strokeDasharray="10, 5" />
    </svg>):(
        <div
        className="trackingButton"
        style={{
            position: 'absolute',
            top: calculatedPosition[0][1],
            left: calculatedPosition[0][0],
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            zIndex: 10,
        }}>
    </div>
    ))}
    {placedRoad.map((item,index) => {
        return(<div key={index}>{
            item.placedRoadCoord.map((line, idx) => {
                return(<div key={idx}>
                <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    pointerEvents: 'none',
                }}
                width="100%"
                height="100%">
                    <line x1={line[0][0]} y1={line[0][1]} x2={line[1][0]} y2={line[1][1]}  stroke="blue" strokeWidth="5"/>
                    <line x1={line[1][0]} y1={line[1][1]} x2={line[2][0]} y2={line[2][1]}  stroke="blue" strokeWidth="5" />
                </svg>
                </div>)
            })
        }</div>)
    })}
    </>)
}
