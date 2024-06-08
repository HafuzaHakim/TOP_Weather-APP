import '../src/style.css';
import { getData } from './modules/fetch';

getData('Kampar')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error('Error outside', err));

function renderData(data) {}

function displayError() {}
