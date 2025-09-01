
export const calculatePosition = (mouseX ,mouseY  ,mapRef ,checkObject) => {
    const gridCellSize = 37.795275591 * 0.6;
    let rectTop;
    let rectLeft;
    if (mapRef && mapRef.current) {
        rectTop = mapRef.current.getBoundingClientRect().top;
        rectLeft = mapRef.current.getBoundingClientRect().left;
    } else {
        rectTop = 96.5;
        rectLeft = 6;
    }
    
    const gridX = Math.round(mouseX / gridCellSize) * gridCellSize;
    const gridY = Math.round(mouseY / gridCellSize) * gridCellSize;
    let width = 10;
    let height = 10;
    if (checkObject) {
        width = parseInt(checkObject.width);
        height = parseInt(checkObject.height);
    }
    const left = gridX - width / 2 - rectLeft;
    const top = gridY - height / 2 - rectTop;
    let calculatedPosition = { top, left };
    return calculatedPosition;
};