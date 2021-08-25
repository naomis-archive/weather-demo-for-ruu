import { weatherClimate } from "../data/weatherClimates";
import { precipitation, special } from "../data/weatherData";

/**
 * Generates a random weather forecast.
 *
 * @param {"Rudania" | "Inariko"} region The region to forecast.
 * @param {string} season The current season.
 * @returns {string} The weather forecast.
 */
export const getWeather = (
  region: "Rudania" | "Inariko",
  season: string
): string => {
  let precipitationBonus = 0;

  if (season === "Fall" || season === "Winter") {
    precipitationBonus = 30;
  }

  const allowedPrecipiation = precipitation.filter(
    (el) => !weatherClimate[region].never.includes(el)
  );

  const precipitationChance =
    Math.floor(Math.random() * 60) + precipitationBonus;

  const precipitationString =
    precipitationChance >= 50
      ? allowedPrecipiation[
          Math.floor(Math.random() * allowedPrecipiation.length)
        ]
      : "dry";

  const allowedSpecial = special.filter(
    (el) => !weatherClimate[region].never.includes(el)
  );

  const specialChance = Math.floor(Math.random() * 100);

  const specialString =
    specialChance >= 70
      ? allowedSpecial[Math.floor(Math.random() * allowedSpecial.length)]
      : "none";
  return `The weather in ${region} today! Season: ${season} Precipitation: ${precipitationString} Special Climate: ${specialString}`;
};
