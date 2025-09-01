import { useCityContext } from '../../cityContext/cityContext';
import React, { useState, useEffect } from 'react';

export const ObjectRoadTracking = ({ mapRef }) => {
    const { contextValue } = useCityContext();
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastDirection, setLastDirection] = useState<'horizontal' | 'vertical' | null>(null);
    const [currentMousePosition, setCurrentMousePosition] = useState<[number, number] | null>(null);
    const [lastPlaced, setLastPlaced] = useState<number[][]>([]);
    const gridCellSize = 37.795275591 * 0.6;

    const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = (mapRef.current as HTMLElement)?.getBoundingClientRect();
        if (!rect) return;
    
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const gridX = Math.round(x / gridCellSize) * gridCellSize;
        const gridY = Math.round(y / gridCellSize) * gridCellSize;
    
        if (!isDrawing) {
            contextValue.setPlacedRoad([[gridX, gridY]]);
            setLastPlaced([[gridX, gridY]]);
            setIsDrawing(true);
            setLastDirection(null);
            setCurrentMousePosition([gridX, gridY]);
        } else {
            const lastCoord = lastPlaced[lastPlaced.length - 1];
            const dx = gridX - lastCoord[0];
            const dy = gridY - lastCoord[1];
    
            let newCoord: [number, number];
    
            if (Math.abs(dx) > Math.abs(dy)) {
                newCoord = [gridX, lastCoord[1]];
                setLastDirection('horizontal');
            } else {
                newCoord = [lastCoord[0], gridY];
                setLastDirection('vertical');
            }
            if (lastPlaced.length <= 1) {
                setLastPlaced([...lastPlaced, newCoord]);
            } else {
                setIsDrawing(false);
            }
            contextValue.setPlacedRoad([...contextValue.placedRoad, newCoord]);
        }
    };
    console.log(contextValue.placedRoad)

    const handleDivMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (isDrawing) {
            const rect = (mapRef.current as HTMLElement)?.getBoundingClientRect();
            if (!rect) return;

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const gridX = Math.round(x / gridCellSize) * gridCellSize;
            const gridY = Math.round(y / gridCellSize) * gridCellSize;

            contextValue.setPlacedRoad(prevCoordinates => {
                const lastCoord = prevCoordinates[prevCoordinates.length - 1];
                const dx = gridX - lastCoord[0];
                const dy = gridY - lastCoord[1];

                let newCoord: [number, number];

                if (prevCoordinates.length === 1) {
                    if (Math.abs(dx) > Math.abs(dy)) {
                        newCoord = [gridX, lastCoord[1]];
                        setLastDirection('horizontal');
                    } else {
                        newCoord = [lastCoord[0], gridY];
                        setLastDirection('vertical');
                    }
                } else {
                    if (lastDirection === 'horizontal') {
                        newCoord = [gridX, lastCoord[1]];
                    } else if (lastDirection === 'vertical') {
                        newCoord = [lastCoord[0], gridY];
                    } else {
                        newCoord = [gridX, gridY];
                    }
                }
                return [...prevCoordinates.slice(0, -1), newCoord];
            });
            setCurrentMousePosition([gridX, gridY]);
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (isDrawing) {
            const rect = mapRef.current?.getBoundingClientRect();
            if (!rect) return;
    
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setCurrentMousePosition([x, y]);
          }
        };
    
        if (contextValue.roadTracking) {
          const mapElement = mapRef.current;
          if (mapElement) {
            mapElement.addEventListener('mousemove', handleMouseMove);
          }
          return () => {
            const mapElement = mapRef.current;
            if (mapElement) {
              mapElement.removeEventListener('mousemove', handleMouseMove);
            }
          };
        }
      }, [contextValue.roadTracking, isDrawing]);

    return (
        <>
            <svg
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
                {contextValue.placedRoad.map((coord, index) => {
                    if (index < contextValue.placedRoad.length - 1) {
                        return (
                            <line
                                key={`line-${index}`}
                                x1={coord[0]}
                                y1={coord[1]}
                                x2={contextValue.placedRoad[index + 1][0]}
                                y2={contextValue.placedRoad[index + 1][1]}
                                stroke="blue"
                                strokeWidth="5"
                            />
                        );
                    }
                return null;
            })}
            </svg>
            {contextValue.roadTracking && (
                <>
                    <svg
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
                        

                        {/* Preview Line - Now Corrected! */}
                        {isDrawing && contextValue.placedRoad.length > 0 && (
                            <line
                                x1={contextValue.placedRoad[contextValue.placedRoad.length - 1][0]}
                                y1={contextValue.placedRoad[contextValue.placedRoad.length - 1][1]}
                                x2={currentMousePosition ? currentMousePosition[0] : contextValue.placedRoad[contextValue.placedRoad.length - 1][0]}
                                y2={currentMousePosition ? currentMousePosition[1] : contextValue.placedRoad[contextValue.placedRoad.length - 1][1]}
                                stroke="blue"
                                strokeWidth="5"
                                strokeDasharray="5, 5" // Dashed line for the preview
                            />
                        )}

                        {/* Additional preview line for the second line, if needed */}
                        {isDrawing && contextValue.placedRoad.length == 1 && lastDirection === 'horizontal' && currentMousePosition && (
                            <line
                                x1={contextValue.placedRoad[contextValue.placedRoad.length - 1][0]}
                                y1={contextValue.placedRoad[contextValue.placedRoad.length - 1][1]}
                                x2={currentMousePosition[0]}
                                y2={contextValue.placedRoad[contextValue.placedRoad.length - 1][1]}
                                stroke="blue"
                                strokeWidth="5"
                                strokeDasharray="5, 5"
                            />
                        )}

                        {isDrawing && contextValue.placedRoad.length == 1 && lastDirection === 'vertical' && currentMousePosition && (
                            <line
                                x1={contextValue.placedRoad[contextValue.placedRoad.length - 1][0]}
                                y1={contextValue.placedRoad[contextValue.placedRoad.length - 1][1]}
                                x2={contextValue.placedRoad[contextValue.placedRoad.length - 1][0]}
                                y2={currentMousePosition[1]}
                                stroke="blue"
                                strokeWidth="5"
                                strokeDasharray="5, 5"
                            />
                        )}
                    </svg>
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: 11,
                        }}
                        onClick={handleDivClick}
                        onMouseMove={handleDivMouseMove}
                    >
                    </div>
                </>
            )}
        </>
    );
};
