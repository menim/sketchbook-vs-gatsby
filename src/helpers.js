export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const phoneRegExp = /^\+?3?8?(0\d{9})$/;

export const uniqueId = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

export const addDataToLocalStorage = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data));
};

export const getDataFromLocalStorage = keyName => {
  return JSON.parse(localStorage.getItem(keyName));
};

export const getProductItemsInStore = (productItems, product) => {
  return productItems.findIndex(
    productItem =>
      productItem.lang === product.lang && productItem.cover === product.cover
  );
};
