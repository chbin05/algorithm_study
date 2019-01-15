function countingValleys(n, s) {
	let beforeLevel = 0;
	let level = 0;
	let valley = 0;

	for(let step of s) {
		beforeLevel = level;

		if (step === 'D') {
			level--;
		}

		if (step === 'U') {
			level++;
		}

		if(beforeLevel < 0 && level === 0) {
			valley++;
		}
	}

	return valley;
}
