export const API_KEY = "AIzaSyCzeqbaKc8js1OjJbfecp2ucEL_EYd7Qp4";
export const value_conveter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "k";
  } else {
    return value;
  }
};
