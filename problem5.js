const extractCarYears = require('./problem4.js');

module.exports = function findingCarsMadeBefore2000(inventory) {
    if (Array.isArray(inventory)) {
        const carYears = extractCarYears(inventory);
        let carsMadeBefore2000 = carYears.map((year, index) => {
            if(year < 2000) {
                return inventory[index];
            } else {
                return null;
            }
        })
        .filter((car) => {
            return car != null;
        });

        return carsMadeBefore2000;
    } else {
        console.log('First Argument should be an Array.');
    }
}