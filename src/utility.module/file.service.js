const fs = require('fs');

module.exports = {
    async saveData(fileName, data) {
        let oldData = await fs.readFileSync(fileName, "utf8");
        oldData = oldData.length && JSON.parse(oldData);
        data = {...oldData, ...data};
        data = JSON.stringify(data);
        await fs.writeFileSync(fileName, data);
    },

    async getData(fileName){
        return await fs.readFileSync(fileName, "utf8");
    }
}