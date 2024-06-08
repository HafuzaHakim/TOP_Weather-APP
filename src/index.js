import '../src/style.css';
import { getData } from './modules/fetch';
import { dateAndTime, clear } from './modules/util';
import {
  setBackground,
  createDailyComponent,
  createWeeklyComponent,
} from './modules/ui';

const form = document.querySelector('#form');

document.addEventListener('DOMContentLoaded', () => {
  getData('Balik Pulau')
    .then((data) => {
      console.log(data);
      setBackground(data);
      createDailyComponent(data);
    })
    .catch((err) => console.error('Error outside', err));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = document.querySelector('#city').value;

  getData(value)
    .then((data) => {
      console.log(data);
      setBackground(data);
      createDailyComponent(data);
    })
    .catch((err) => console.error('Error outside', err));
  form.reset();
});
