import { getSeason } from "./modules/getSeason";
import { getWeather } from "./modules/getWeather";

(() => {
  const season = getSeason();

  const rudania = getWeather("Rudania", season);
  const inariko = getWeather("Inariko", season);

  console.table({ rudania, inariko });
})();
