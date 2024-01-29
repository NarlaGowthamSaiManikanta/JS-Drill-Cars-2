module.exports = function extractingAudiAndBMWCars(inventory) {
    if (Array.isArray(inventory)) {
        let audiAndBMWCars = inventory.filter((car) => {
            return (car.car_make == 'Audi' || car.car_make == 'BMW');
        });

        return audiAndBMWCars;
    } else {
        console.log('First Argument should be an Array.');
    }
}