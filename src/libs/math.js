export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isEven = i => i % 2 === 0;
export const gcd = (numA, numB) => {
  if (numB === 0) {
    return numA;
  }
  return gcd(numB, numA % numB);
};