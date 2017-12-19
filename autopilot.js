function getNewCar() {
    car = {city: 'Toronto', passengers: 0, gas: 100};
    return car;
  }

function addCar(cars, newCar) {
  cars.push(newCar);
  return 'Adding new car to fleet. Fleet size is now ' + cars.length + ".";
}

function pickUpPassenger(car) {
  car['passengers'] += 1;
  car['gas'] -= 10;
  return "Picked up passenger. Car now has " + car['passengers']
}

function getDestination(car) {
  if (car['city'] === 'Toronto') {
    return 'Mississauga';
  } else if (car['city'] === 'Mississauga') {
    return 'London';
  } else if (car['city'] === 'Mississauga') {
    return 'London';
  }
}

function fillUpGas(car) {
  oldGas = car['gas'];
  car['gas'] = 100;
  return 'Filled up to ' + getGasDisplay(car['gas']) + ' on gas from '+ getGasDisplay(oldGas)+' .';
}

function getGasDisplay(gasAmount){
  return gasAmount;
}

function drive(car, cityDistance) {
  if (car['gas'] < cityDistance) {
    return fillUpGas(car);
  }

  car['city'] = getDestination(car);
  car['gas'] -= cityDistance;
  return 'Drove to ' + car['city'] + ". Remaining gas: " + getGasDisplay(car['gas']) + '.';
}

function dropOffPassengers() {
  previousPassengers = car['passengers'];
  car['passengers'] =0;
  return 'Dropped off ' + previousPassengers + ' passengers.';
}

function act(car) {
  distanceBetweenCities = 50;

  if (car.gas < 20){
    return fillUpGas(car);
  } else if (car['passengers'] < 3) {
    return pickUpPassenger(car);
  } else {
      if (car['gas'] < distanceBetweenCities) {
        return fillUpGas(car);
      }
      droveTo = drive(car, distanceBetweenCities);
      passengersDropped = dropOffPassengers(car);
      return droveTo + ' ' + passengersDropped;
    }
  }

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i ++) {
    action = act(cars[i]);
    console.log('Car ' + (i + 1) + ':' + action);
  }
  console.log('---');
}

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i ++) {
    newCar = getNewCar();
    addCar(cars, newCar);
    commandFleet(cars);
  }
}



var cars = [];
addOneCarPerDay(cars, 10);
// console.log(cars);
// var xer = {wakka: "EEeeeeeiiiii"}
//
// addCar(cars, xer);
