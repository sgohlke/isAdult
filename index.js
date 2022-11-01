/**
 * Given an age and country, checks if the person is considered an adult in the given country.
 * @param {number} age The age to test
 * @param {string} country The country to test
 * @return {boolean} true if the person is considered an adult in the country, else false
 * */
export function isAdultInCountry(age, country) {
  switch (country) {
    case 'DEU':
      return age >= 18;
    case 'NPL':
      return age >= 16;
    default:
      return age >= 18;
  }
}

/**
 * Given an age, checks if the person is considered an adult.
 * @deprecated Use isAdultInCountry(age, country) instead
 * @param {number} age The age to test
 * @return {boolean} true if the person is considered an adult, else false
 * */
// eslint-disable-next-line no-unused-vars
export function isAdult(age) {
  return isAdultInCountry(age, 'DEU');
}
