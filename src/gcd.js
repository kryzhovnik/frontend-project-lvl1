const gcd = (n1, n2) => {
  const [number1, number2] = (n1 < n2) ? [n2, n1] : [n1, n2];
  if (number2 === 0) { return number1; }

  const devisor = number1 % number2;

  return gcd(number2, devisor);
};

export default gcd;
