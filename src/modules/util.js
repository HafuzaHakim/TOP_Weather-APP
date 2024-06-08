export function dateAndTime(localtime) {
  const [rawDate, rawTime] = localtime.split(' ');

  const fullDate = new Date(rawDate);
  const [day, month, date, year] = fullDate.toString().split(' ');

  return {
    day: day,
    date: date,
    month: month,
    year: year,
    time: rawTime,
  };
}

export function dayAndDate(localtime) {
  const fullDate = new Date(localtime);
  const [day, month, date, ...rest] = fullDate.toString().split(' ');

  return { day, month, date };
}

export function clear() {
  const main = document.querySelector('main');
  main.textContent = '';
}
