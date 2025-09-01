import { useCityContext } from "../../cityContext/cityContext";
import { calculatePosition } from "../sharedFunction/calculatePosition";
import { convertToPositive } from "../sharedFunction/convertToPositive";

import { useEffect, useState } from "react";


export const PlacedCarrisonArmy = ({mapRef}) => {
    const { contextValue } = useCityContext();
    const [previewDerection, setPreviewDerection] = useState({
        car1:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car2:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car3:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car4:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car5:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car6:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car7:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car8:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car9:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
        car10:{
            lineArray: [[200, 500, ]],
            angle: 0
        },
    })
    const setState = (type) => {
        contextValue[`set${type.charAt(0).toUpperCase() + type.slice(1)}`]((prev) => ({
            ...prev,
            type: "checkbox"
        }))
        contextValue.setTrackingObject(null)
    }
    contextValue.carrisonArmy.map((item) => {
        if (contextValue[item.itemID].type === "button") {
            setState(item.itemID);
        }})

    const selectedItem = (state) => {
        if (contextValue[state].checked) {
            return "0 0 10px 5px teal"
        } else {
            return ""
        }
    }

    let index = 0;
    
    const handleMouseMove = (e) => {
        let leftDistanceList = []
        let topDistanceList = []
        let leftList = []
        let topList = []
        let result = []
        let left = calculatePosition(e.clientX, e.clientY,mapRef, null).left
        let top = calculatePosition(e.clientX, e.clientY, mapRef, null).top
        
        const calculateMostDistance = () => {
            if (convertToPositive(topDistanceList[0] - topDistanceList[topDistanceList.length - 1]) > convertToPositive(leftDistanceList[0] - leftDistanceList[leftDistanceList.length - 1])) {
                return "vertical"
            } else {
                return "horizontal"
            }
        }

        contextValue.carrisonArmy.forEach((item) => {
            if (contextValue[item.itemID].checked) {
                result.push(contextValue[item.itemID].itemID)
                topDistanceList.push(item.y)
                leftDistanceList.push(item.x)
            }
        })
        const calculateDistance = calculateMostDistance()

        const derectionClick = () => {
            contextValue.carrisonArmy.forEach((item, index) => {
                let idx = 0;
                if (contextValue[item.itemID]?.checked) {
                    const objectCenterX = item.x + parseFloat(item.width) / 2;
                    const objectCenterY = item.y + parseFloat(item.height) / 2;
                    let angleDegList = []
                    for (let i = 0; i < 10; i++) {
                        const angleRad = Math.atan2(topList[i] - objectCenterY, left - objectCenterX);
                        const angleDeg = angleRad * (180 / Math.PI);
                        if (angleDeg) {
                            angleDegList.push(angleDeg)
                        } else {
                            angleDegList.push(0)
                        }
                    }
                    setPreviewDerection((prev) => {
                        const newRotation = {...prev};
                        if (result[index]) {
                            newRotation[result[index]].angle = angleDegList[index];

                        }
                        return newRotation;
                    });
                    idx += 1
                };
            });
        };
        
        
        if (calculateDistance === "vertical") {
            let distence = 0;
            for (let i = 0; i < result.length; i++) {
                if (i >= 1) {
                    distence += (topDistanceList[i] - topDistanceList[i - 1])
                }
                topList.push(top+distence)
            }
            if (index == 0) {
                setPreviewDerection((prev) => {
                    const newRotation = {...prev};
                    for (let i = 0; i < result.length; i++) {
                        newRotation[result[i]].lineArray[index] = [left, topList[i]];
                    }
                    return newRotation;
                });
            } else {
                /*setPreviewDerection((prev) => {
                    const newRotation = [...prev]; 
                    newRotation[index] = [left, top,previewDerection[index-1][0] ,previewDerection[index-1][1]];
                    return newRotation;
                });*/
            }
        } else {
            let distence = 0;
            for (let i = 0; i < result.length; i++) {
                if (i >= 1) {
                    distence += (leftDistanceList[i] - leftDistanceList[i - 1])
                }
                leftList.push(left+distence)
            }
            if (index == 0) {
                setPreviewDerection((prev) => {
                    const newRotation = {...prev};
                    for (let i = 0; i < result.length; i++) {
                        newRotation[result[i]].lineArray[index] = [leftList[i], top];
                    }
                    return newRotation;
                });
            } else {
                /*setPreviewDerection((prev) => {
                    const newRotation = [...prev]; 
                    newRotation[index] = [left, top,previewDerection[index-1][0] ,previewDerection[index-1][1]];
                    return newRotation;
                });*/
            }
        }
        window.addEventListener('click', derectionClick)
    };

    useEffect(() => {
        if (contextValue.carrisonArmy.length > 0) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [contextValue.car1.checked,contextValue.car2.checked,contextValue.car3.checked,contextValue.car4.checked,
        contextValue.car5.checked,contextValue.car6.checked,contextValue.car7.checked,contextValue.car8.checked,
        contextValue.car9.checked,contextValue.car10.checked
    ])
        
    
    return(<>
        {contextValue.carrisonArmy.map((item, index) => 
            <div  key={item.itemID}>
            <div
            className="trackingButton"
            style={{
                position: 'absolute',
                top: item.y,
                left: item.x,
                width: item.width,
                height: item.height,
                backgroundColor: "green",
                boxShadow: selectedItem(item.itemID),
                zIndex: 10,
                transform: `rotate(${previewDerection[item.itemID].angle}deg)`,
                transition: 'transform 1.5s ease',
            }}>
                {item.itemID}
            </div>
            {
            contextValue[item.itemID].checked &&
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
            <line x1={previewDerection[item.itemID].lineArray[0][0]} y1={previewDerection[item.itemID].lineArray[0][1]} x2={item.x} y2={item.y+35}  stroke="blue" strokeWidth="2" strokeDasharray="20, 5" />
            {previewDerection.car1.lineArray.map((items, idx) => {
                if (idx >= 1) {
                    return (
                        <line key={idx} x1={items[0]} y1={items[1]} x2={items[2]} y2={items[3]}  stroke="blue" strokeWidth="2" strokeDasharray="20, 5" />   
                    )
                }
            })}
            </svg>
            }
            </div>
            )
        }
    </>)
}