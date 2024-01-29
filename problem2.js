module.exports = function lastCarInInventory(inventory) {
    if (Array.isArray(inventory)) {
        if (inventory.length) {
            lastCar = inventory.reduce((accumulator, car) => {
                return car;
            });

            return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
        } else {
            return 'The Inventory is Empty';
        }
    } else {
        console.log('First Argument should be an Array.');
    }
}