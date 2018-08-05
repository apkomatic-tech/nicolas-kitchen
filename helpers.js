const capitalize = str =>
  str.charAt(0).toUpperCase() +
  str
    .split('')
    .splice(1, str.length)
    .join('');

const getCurrentYear = () => {
  const d = new Date();
  return d.getFullYear();
};

const randomize = (max = 100000) => `${Math.floor(Math.random() * max)}${Math.floor(Math.random() * max)}`;

export { capitalize, getCurrentYear, randomize };
