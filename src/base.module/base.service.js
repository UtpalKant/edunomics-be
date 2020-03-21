const { droppingTime, bounceBackHeight } = require('../utility.module/utility.service');
const { getData, saveData } = require('../utility.module/file.service');

const uuid = require('uniqid');

module.exports = {
    async getBounceDetails(dropDistance, k) {
        //validating the input.
        dropDistance = dropDistance || 0;
        k = k || 1;
        
        const result = [];

        while(Math.round(dropDistance) > 0){
            // time taken to touch ground.
            let touchingTime = droppingTime(dropDistance);
            // pushing 1/2 T0 - initial time for ball to reach ground.
            !result.length && result.push({bounceTime: touchingTime, bounceHeight: dropDistance});
            // speed when it touches the ground.
            let maxVelocity = dropDistance / touchingTime;
            // bounce back height.
            bounceHeight = bounceBackHeight(maxVelocity, k);
            // time to reach bounce back height.
            let bounceTime = maxVelocity / 9.8;
            // time taken by ball to jump as well as come down, although touchingTime === bouncingTime
            result.length && result.push({bounceTime: 2*bounceTime, bounceHeight});
            dropDistance = bounceHeight;
        }

        // binding each result in db with a primary key.
        await saveData("data.json", {[uuid()]: result});
        return result;
    },

    async getSavedData(){
        let data = await getData("data.json");
        return JSON.parse(data);
    }
};
