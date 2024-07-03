function analyzeCarMileage(cars) {
  const avgMileage = cars.reduce((total, car) => total + car.mileage, 0) / cars.length;
  const highestMileageCar = cars.reduce((highest, car) => (car.mileage > highest.mileage ? car : highest
  ), cars[0])
  const lowestMileageCar = cars.reduce((lowest, car) => (car.mileage < lowest.mileage ? car : lowest
  ));
  return {
    averageMileage: parseFloat(avgMileage.toFixed(2)),
    highestMileageCar: highestMileageCar,
    lowestMileageCar: lowestMileageCar
  }
}


const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800.22 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000.12 },
  { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
  { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
  { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];

// 1. Calculate the average mileage of all cars.
// 2. Find the car with the highest mileage.
// 3. Find the car with the lowest mileage.
// 4. Calculate the total mileage of all cars combined.

// The function should return an object containing the calculated values as properties.

const result = analyzeCarMileage(cars);
console.log(result);
module.exports = analyzeCarMileage;
