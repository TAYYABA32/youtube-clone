export const API_KEY = "AIzaSyBEJH5vjoXTWzpGWN2SygMn_NGc0kBkXgE";
export const value_conveter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};
