function getSleepHours(day) {
  day = day.toLowerCase();

  if (day === 'monday') {
    return 6;
  } else if (day === 'tuesday') {
    return 6;
  } else if (day === 'wednesday') {
    return 5;
  } else if (day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 5;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 10;
  }

  return 0;
}

const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

const getIdealSleepHours = (hours) => hours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);
  const sleepDebt = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours) {
    return (
      'You have ' +
      sleepDebt +
      'h sleep hours debt, so you got the perfect amount of sleep'
    );
  } else if (actualSleepHours > idealSleepHours) {
    return 'You have slept ' + sleepDebt + 'h over recommended sleep time';
  } else {
    return (
      'You have slept ' +
      Math.abs(sleepDebt) +
      'h under recommended sleep time, you should rest more'
    );
  }
};

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());
console.log(getIdealSleepHours(7));
console.log(calculateSleepDebt());
