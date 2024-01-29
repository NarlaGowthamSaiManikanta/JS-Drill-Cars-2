module.exports = function findCarById(inventory, id) {
    if (Array.isArray(inventory)) {
        if (id) {
            if (inventory[id - 1]) {
                carById = inventory.filter((car) => {
                    return car.id === id;
                });

                return `Car ${id} is a ${carById[0].car_year} ${carById[0].car_make} ${carById[0].car_model}`;
            } else {
                return `Car ${id} is not present in inventory.`
            }
        } else {
            console.log('Second Argument to be passed.');
        }
    } else {
        console.log('First Argument should be an Array.');
    }
}