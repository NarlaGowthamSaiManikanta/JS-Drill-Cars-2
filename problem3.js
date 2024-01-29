module.exports = function findingSortedCarModels(inventory) {
    if (Array.isArray(inventory)) {
        let carModels = inventory.map((car) => {
            return car.car_model;
        });

        return carModels.sort();
    } else {
        console.log('First Argument should be an Array.');
    }
}