// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

// Output: ['Antonia', 'Nuru']



const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
// Output: ['Amari', 'Mo']


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers, driverFunction) {
  return driverFunction(drivers);
}
