const parity = n => {
  if (n % 2 == 0) return n + ' is even';
  return n + ' is odd';
};

for (let i = 0; i < 10; i++) {
  console.log(parity(i));
}

for (let i = 0; i < 10; i++) {
  console.log(parity(i));
}
