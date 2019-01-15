function sockMerchant(n, ar) {
	let matchmaker = [];
	let pairsCount = 0;

	for(const sock of ar) {
		if(matchmaker[sock]) {
			pairsCount++;
		}

		matchmaker[sock] = !matchmaker[sock];
	}

	return pairsCount;
}
