function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Arguments must be numbers");
  }
  return a + b;
}

function main() {
  const result = sum(2, 3);
  console.log("CI test: everything is OK");
}

if (require.main === module) {
  main();
}

module.exports = { sum };
