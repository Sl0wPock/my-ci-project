function sum(a, b) {
  return a + b;
}

function main() {
  const result = sum(2, 3);
  console.log(`Result is ${result}`);
}

if (require.main === module) {
  main();
}

module.exports = { sum };
