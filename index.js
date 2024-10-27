/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgs = 0.5; // fuel burn rate (kg/s)

// Convert acceleration from m/s^2 to km/h^2
const accelerationKmH2 = accelerationMs2 * 12960; // 1 m/s^2 = 12960 km/h^2


const calcNewDistance = initialDistanceKm + (velocityKmH*(timeInSeconds/3600)); //calcultes new distance
const calcRemainingFuelKg = initialFuelKg - (fuelBurnRateKgs * timeInSeconds); //calculates remaining fuel
const currentVelocityKmH = velocityKmH + (accelerationKmH2 * (timeInSeconds / 3600)) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
// calcNewVel = (vel, acc, time) => { 
//   return vel + (acc*time)
// }

function calcNewVelocityKmH(velocityKmH, accelerationMs2, timeInSeconds){
  // check if the parameters are not negative
  if(velocityKmH < 0 || accelerationMs2 < 0 || timeInSeconds < 0){
    throw new Error('Parameters cannot be negative')
  }

  // convert acceleration from m/s^2 to km/h^2
  const accelerationKmH2 = accelerationMs2 * 12960; // 1 m/s^2 = 12960 km/h^2
  const timeInHours = timeInSeconds / 3600
  return velocityKmH + (accelerationKmH2 * timeInHours)
}

try {
  const currentVelocityKmH = calcNewVelocityKmH(velocityKmH, accelerationMs2, timeInSeconds)
  console.log(`Corrected New Velocity: ${currentVelocityKmH} km/h`);
  console.log(`Corrected New Distance: ${calcNewDistance} km`);
  console.log(`Corrected Remaining Fuel: ${calcRemainingFuelKg} kg`);
} catch (error) {
  console.log(error.message)
}






