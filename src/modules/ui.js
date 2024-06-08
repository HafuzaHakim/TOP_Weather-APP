import { dateAndTime, dayAndDate, clear } from './util';

const body = document.querySelector('body');
const main = document.querySelector('main');

export function setBackground({ current: { is_day } }) {
  if (is_day) {
    body.classList.remove('bg_night');
    body.classList.add('bg_day');
  } else {
    body.classList.remove('bg_day');
    body.classList.add('bg_night');
  }
}

export function createDailyComponent({
  location: { name, localtime },
  current: {
    condition: { text, icon: src },
    temp_c,
    feelslike_c,
    vis_km,
    wind_kph,
    humidity,
  },
  forecast: {
    forecastday: [
      {
        astro: { sunrise: sunUp, sunset: sunDown },
        day: { daily_chance_of_rain: rainPercent },
      },
    ],
  },
}) {
  const {
    day: currDay,
    date: currDate,
    month: currMonth,
    year: currYear,
    time: currTime,
  } = dateAndTime(localtime);

  //   TOP

  const top = document.createElement('div');
  top.classList.add('top');

  const geo = document.createElement('div');
  geo.classList.add('geo');

  const location = document.createElement('h2');
  location.classList.add('location');
  location.textContent = name;

  geo.appendChild(location);

  const calendar = document.createElement('div');
  calendar.classList.add('calendar');

  const day = document.createElement('span');
  day.classList.add('day');
  day.textContent = currDay;

  const date = document.createElement('span');
  date.classList.add('date');
  date.textContent = `${currMonth} ${currDate} ${currYear}`;

  const time = document.createElement('span');
  time.classList.add('time');
  time.textContent = currTime;

  calendar.appendChild(day);
  calendar.appendChild(date);
  calendar.appendChild(time);

  geo.appendChild(calendar);
  top.appendChild(geo);

  const icon = document.createElement('div');
  icon.classList.add('icon');

  const img = document.createElement('img');
  img.src = src;
  img.alt = text;

  icon.appendChild(img);
  top.appendChild(icon);

  const daily = document.createElement('div');
  daily.classList.add('daily');
  daily.appendChild(top);

  //   BOTTOM

  const bottom = document.createElement('div');
  bottom.classList.add('bottom');

  const temp = document.createElement('div');
  temp.classList.add('temp');

  const condition = document.createElement('p');
  condition.classList.add('condition');
  condition.textContent = text;

  const actTemp = document.createElement('p');
  actTemp.classList.add('act_temp');
  actTemp.textContent = temp_c;

  const likeTemp = document.createElement('p');
  likeTemp.classList.add('like_temp');
  likeTemp.textContent = `Feels like ${feelslike_c}`;

  temp.appendChild(condition);
  temp.appendChild(actTemp);
  temp.appendChild(likeTemp);

  bottom.appendChild(temp);

  const side = document.createElement('div');
  side.classList.add('side');

  const sunrise = document.createElement('div');
  sunrise.classList.add('side_item');
  const sunriseTitle = document.createElement('p');
  sunriseTitle.classList.add('side_title');
  sunriseTitle.textContent = 'Sunrise';
  const sunriseData = document.createElement('p');
  sunriseData.classList.add('side_data');
  sunriseData.textContent = sunUp;
  sunrise.appendChild(sunriseTitle);
  sunrise.appendChild(sunriseData);

  const sunset = document.createElement('div');
  sunset.classList.add('side_item');
  const sunsetTitle = document.createElement('p');
  sunsetTitle.classList.add('side_title');
  sunsetTitle.textContent = 'Sunset';
  const sunsetData = document.createElement('p');
  sunsetData.classList.add('side_data');
  sunsetData.textContent = sunDown;
  sunset.appendChild(sunsetTitle);
  sunset.appendChild(sunsetData);

  const rainChance = document.createElement('div');
  rainChance.classList.add('side_item');
  const rainChanceTitle = document.createElement('p');
  rainChanceTitle.classList.add('side_title');
  rainChanceTitle.textContent = 'Chance of rain';
  const rainChanceData = document.createElement('p');
  rainChanceData.classList.add('side_data');
  rainChanceData.textContent = `${rainPercent}%`;
  rainChance.appendChild(rainChanceTitle);
  rainChance.appendChild(rainChanceData);

  const humid = document.createElement('div');
  humid.classList.add('side_item');
  const humidTitle = document.createElement('p');
  humidTitle.classList.add('side_title');
  humidTitle.textContent = 'Humidity';
  const humidData = document.createElement('p');
  humidData.classList.add('side_data');
  humidData.textContent = `${humidity}%`;
  humid.appendChild(humidTitle);
  humid.appendChild(humidData);

  const wind = document.createElement('div');
  wind.classList.add('side_item');
  const windTitle = document.createElement('p');
  windTitle.classList.add('side_title');
  windTitle.textContent = 'Wind';
  const windData = document.createElement('p');
  windData.classList.add('side_data');
  windData.textContent = `${wind_kph}kph`;
  wind.appendChild(windTitle);
  wind.appendChild(windData);

  const vis = document.createElement('div');
  vis.classList.add('side_item');
  const visTitle = document.createElement('p');
  visTitle.classList.add('side_title');
  visTitle.textContent = 'Visibility';
  const visData = document.createElement('p');
  visData.classList.add('side_data');
  visData.textContent = `${vis_km}km`;
  vis.appendChild(visTitle);
  vis.appendChild(visData);

  side.appendChild(sunrise);
  side.appendChild(sunset);
  side.appendChild(rainChance);
  side.appendChild(humid);
  side.appendChild(wind);
  side.appendChild(vis);

  bottom.appendChild(side);

  daily.appendChild(bottom);

  main.appendChild(daily);
}

export function createWeeklyComponent({ forecast: { forecastday } }) {
  const weekly = document.createElement('div');
  weekly.classList.add('weekly');

  const weekTitle = document.createElement('div');
  weekTitle.classList.add('weekly_title');
  weekTitle.textContent = 'Weekly Forecast';

  const future = document.createElement('div');
  future.classList.add('future');

  forecastday.forEach(
    ({
      date,
      day: {
        avgtemp_c,
        daily_chance_of_rain,
        condition: { text, icon },
      },
    }) => {
      const {
        day: currDay,
        month: currMonth,
        date: currDate,
      } = dayAndDate(date);

      const fdays = document.createElement('div');
      fdays.classList.add('future_days');

      const dTop = document.createElement('div');
      dTop.classList.add('day_top');

      const actDay = document.createElement('p');
      actDay.classList.add('future_day');
      actDay.textContent = currDay;

      const fdate = document.createElement('span');
      fdate.classList.add('future_date');
      fdate.textContent = `${currMonth} ${currDate}`;

      dTop.appendChild(actDay);
      dTop.appendChild(fdate);

      const fcast = document.createElement('div');
      fcast.classList.add('forecast');

      const img = document.createElement('img');
      img.src = icon;
      img.alt = text;

      fcast.appendChild(img);

      const dBot = document.createElement('div');
      dBot.classList.add('day_bottom');

      const fTemp = document.createElement('p');
      fTemp.classList.add('future_temp');
      fTemp.textContent = avgtemp_c;

      const frain = document.createElement('div');
      frain.classList.add('future_rain');

      const rainIcon = document.createElement('i');
      rainIcon.className = 'fa-solid fa-cloud-rain';

      const rPercent = document.createElement('p');
      rPercent.classList.add('rain_percent');
      rPercent.textContent = `${daily_chance_of_rain}%`;

      frain.appendChild(rainIcon);
      frain.appendChild(rPercent);

      dBot.appendChild(fTemp);
      dBot.appendChild(frain);

      fdays.appendChild(dTop);
      fdays.appendChild(fcast);
      fdays.appendChild(dBot);

      future.appendChild(fdays);
    }
  );

  weekly.appendChild(weekTitle);
  weekly.appendChild(future);
  main.appendChild(weekly);
}
