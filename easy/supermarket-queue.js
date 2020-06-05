const perf = require('execution-time')();

perf.start();

const supermarketQueue = (customers, tillAmt) => {
	let tills = Array(tillAmt <= 0 ? 1 : tillAmt).fill(0);
	customers.forEach(customer => {
	const fastest = tills.indexOf(Math.min(...tills));
	tills[fastest] += customer;
  });
  return Math.max(...tills);
};

console.log(supermarketQueue([5,3,4], 0))
const results = perf.stop();
console.log(results.time);