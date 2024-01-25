module.exports = function extractCarYears(inventory) {
    let carYears = inventory.map((car) => {
        return car.car_year;
    });

    return carYears;
}