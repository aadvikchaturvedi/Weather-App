# Weather App

A single-page weather lookup in vanilla JavaScript and Tailwind CSS. Type a city, click **Get Weather**, and it shows the city name, current temperature in °C, and a short description from the OpenWeatherMap Current Weather API. Unknown cities show a "City Not Found" message.

## How it works

- `index.html`: input, button, result and error elements, styled with Tailwind utility classes.
- `script.js`: on click, calls `https://api.openweathermap.org/data/2.5/weather?q=<city>&units=metric&appid=<key>` with `fetch`, then fills in `name`, `main.temp` and `weather[0].description`. A non-OK response shows the error message.
- `input.css` → `output.css`: Tailwind v4 source and compiled stylesheet.

## Running it

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api).
2. In `script.js`, replace the value of `API_KEY` with your own key:

   ```js
   const API_KEY = "<your-openweathermap-api-key>";
   ```

   Use your own key; don't rely on the one committed in the repo.
3. Open `index.html` in a browser, or serve the folder (e.g. `npx serve .`).

To rebuild the CSS after changing classes:

```bash
npm install
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

## Limitations

- The API key is in client-side JavaScript, so anyone can read it from the page. For anything public, proxy the request through a small backend that holds the key.
- The city name isn't URL-encoded before it goes into the query string.
- Only current conditions; no forecast, units toggle or geolocation.

## License

MIT, see [LICENSE](LICENSE).
