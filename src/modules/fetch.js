const apiKey = '6f3394a19a3a46478a301618240706';
// API Key should always be secured and never to be exposed to the public. However for the purpose of creating this application, there should be no harm to expose the key at the client sied due to the nature of the key being free to the public.
const url = 'http://api.weatherapi.com/v1';

export async function getData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
    );
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      switch (true) {
        case data.error.code === 1002:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 1003:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 1005:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 1006:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 2006:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 2007:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 2008:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 2009:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 9000:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 9001:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        case data.error.code === 9999:
          throw new Error(`Error ${data.error.code} : ${data.error.message}`);
          break;
        default:
          throw new Error('Unknown error');
      }
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}
