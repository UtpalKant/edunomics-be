module.exports = {
    droppingTime(dropDistance, initialVelocity = 0, gravityAccn = -9.8){
        let t1 = (-1 * initialVelocity + Math.sqrt(Math.pow(initialVelocity, 2) - (4 * gravityAccn * dropDistance))) / (2 * gravityAccn);
        let t2 = (-1 * initialVelocity - Math.sqrt(Math.pow(initialVelocity, 2) - (4 * gravityAccn * dropDistance))) / (2 * gravityAccn);
        return t1 > t2 ? t1 : t2;
    },
    
    bounceBackHeight(velocity, k = 1){
        return (k * velocity * 2) / (2 * 9.8);
    }
}