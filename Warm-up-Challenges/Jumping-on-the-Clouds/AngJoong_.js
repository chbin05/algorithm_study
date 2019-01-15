function jumpingOnClouds(c) {
	let jumpingCount = 0;

	for(let i = 0; i < c.length - 1; i++) {
		if(!c[i + 2]) {
			i += 1;
		}

		jumpingCount++;
	}

	return jumpingCount;
}
