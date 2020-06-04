const perf = require('execution-time')();

perf.start();

const stringPerms = string => {
	if(string.length < 2) {
		return string;
	}

	let permutations = [];

	for (let i = 0; i < string.length; i++) {
		const letter = string[i];

		if(string.indexOf(letter) != i) {
			continue;
		}

		let restOfString = string.slice(0, i) + string.slice(i + 1, string.length);
		
		for (const element of stringPerms(restOfString)) {
			permutations.push(letter + element);
		}
	}
	
	return permutations;
};

console.log(stringPerms('xyz'));
const results = perf.stop();
console.log(results.time);