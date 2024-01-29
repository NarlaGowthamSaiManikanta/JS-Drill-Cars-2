module.exports = function extractCarYears(inventory) {
    if (Array.isArray(inventory)) {
        let carYears = inventory.map((car) => {
            return car.car_year;
        });

        return carYears;
    } else {
        console.log('First Argument should be an Array.');
    }
}