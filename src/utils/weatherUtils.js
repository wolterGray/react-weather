export const celsiusToFh = (degrees, value) => {
	if (value === "fah") {
	  return `${Math.round((degrees * 9) / 5 + 32)}ºF`;
	}
	return `${Math.round(degrees)}º`;
 };