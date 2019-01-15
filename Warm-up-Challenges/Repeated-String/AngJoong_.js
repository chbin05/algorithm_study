function repeatedString(s, n) {
	let letterCount = 0;
	let restLetterCount = 0;
	const restLetterLength = n % s.length;

	for(let i = 0; i < s.length; i++) {
		if('a' === s.charAt(i)) {
			letterCount++;
		}

		if(i < restLetterLength && 'a' === s.charAt(i)) {
			restLetterCount++;
		}
	}

	return parseInt(n / s.length) * letterCount + restLetterCount;
}
