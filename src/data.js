export const API_KEY = "AIzaSyAzaVkAYY9oI0CKfBc50l2Q55i0qr5_TzA";
export const value_conveter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};
