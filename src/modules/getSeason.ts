/**
 * Gets the season from the current date.
 *
 * @returns {string} The season.
 */
export const getSeason = (): string => {
  const date = new Date(Date.now());
  const month = date.getMonth() + 1;

  if (month >= 3 && month <= 5) {
    return "Spring";
  }
  if (month >= 6 && month <= 8) {
    return "Summer";
  }
  if (month >= 9 && month <= 11) {
    return "Fall";
  }
  return "Winter";
};
