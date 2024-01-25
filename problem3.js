module.exports = function findingSortedCarModels(inventory) {
    let carModels = inventory.map((car) => {
        return car.car_model;
    });

    return carModels.sort();
}