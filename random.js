const Rand = {
	int(min, max) {
		if (min === void 0)
			min = 2;
		if (max === void 0)
			return Math.floor(Math.random() * min);
		return Math.floor(Math.random() * (max - min + 1) + min);
	},
	float(min, max) {
		if (min === void 0)
			min = 1;
		if (max === void 0)
			return Math.random() * min;
		return Math.random() * (max - min) + min;
	},
	array(array) {
		return array[this.int(array.length)];
	},
	choice() {
		return this.array(Array.from(arguments));
	},
	sign() {
		return this.choice(-1, 1);
	}
};
