let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistered = false;
let runnerAge = 18;

// Early adult runners receive race number +1000
if (earlyRegistered && runnerAge > 18) {
  raceNumber += 1000;
}

// Determine race time
if (earlyRegistered && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}. Please arrive at 9:30 am.`);
} else if (!earlyRegistered && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}. Please arrive at 11:00 am.`);
} else if (runnerAge === 18) {
  console.log('Please see the registration desk for further instructions.');
} else {
  console.log(`Your race number is ${raceNumber}. Please arrive at 12:30 pm.`);
}
