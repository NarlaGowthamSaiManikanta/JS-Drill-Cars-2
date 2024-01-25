module.exports = function findCarById(inventory, id) {
    carById = inventory.filter((car) => {
        return car.id === id;
    });

    return `Car ${id} is a ${carById[0].car_year} ${carById[0].car_make} ${carById[0].car_model}`;
}