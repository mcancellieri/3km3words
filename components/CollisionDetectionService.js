export default class CollisionDetectionService {
    constructor() {
        this.boundingBoxes = []
    }

    static isCollision(currentBox, newBox) {

        let currentWidth = currentBox.x2 - currentBox.x1;
        let currentHeight = currentBox.y2 - currentBox.y1;
        let currentCenter = {
            x: currentBox.x1 + currentWidth / 2,
            y: currentBox.y1 + currentHeight / 2
        };
        let newWidth = newBox.x2 - newBox.x1;
        let newHeight = newBox.y2 - newBox.y1;
        let newCenter = {
            x: newBox.x1 + newWidth / 2,
            y: newBox.y1 + newHeight / 2
        };
        let distanceX = newCenter.x - currentCenter.x;
        let distanceY = newCenter.y - currentCenter.y;
        let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        let isCollision = distance < currentWidth;
        if (isCollision) {
            console.log("Distance X:" + distanceX);
            console.log("Distance Y:" + distanceY);
        }
        return isCollision
    }

    detectAndSave(boundingBox) {
        for (let i = 0; i < this.boundingBoxes.length; i++) {
            if (CollisionDetectionService.isCollision(this.boundingBoxes[i], boundingBox)) {
                console.log(boundingBox.name + " collides with " + this.boundingBoxes[i].name);
                return false;
            }
        }
        this.boundingBoxes.push(boundingBox);
        return false;
    }


}