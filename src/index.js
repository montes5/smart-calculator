class SmartCalculator {
  constructor(initialValue) {
  	this.initialValue = [initialValue];
  }

  add(number) {
  	this.initialValue.push(...["+",number]);
  	return this;
  }

  subtract(number) {
  	this.initialValue.push(...["-",number]);
  	return this;
  }

  multiply(number) {
  	this.initialValue.push(...["*",number]);
  	return this;
  }

  devide(number) {
  	this.initialValue.push(...["/",number]);
  	return this;
  }

  pow(number) {
  	this.initialValue.push(...["**",number]);
  	return this;
  }

  valueOf() {
  	return eval(this.initialValue.join(""));
  }
}

module.exports = SmartCalculator;
