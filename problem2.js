module.exports = function lastCarInInventory(inventory) {
    lastCar = inventory.reduce((accumulator, car) => {
        return car;
    });

    return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
}