module.exports = function extractingAudiAndBMWCars(inventory) {
    let audiAndBMWCars = inventory.filter((car) => {
        return (car.car_make == 'Audi' || car.car_make == 'BMW');
    });

    return audiAndBMWCars;
}