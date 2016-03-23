var fb = require('../fizzbuzz');


describe("A fizzbuzz program", function(){

	it("can count from 1 to 5", function(){
		expect(fb.count(1, 5)).toBe("1 2 fizz 4 buzz ");
	});

	it("prints fizzbuzz when the number is multiple of 5 and 3", function(){
		expect(fb.replace(15)).toBe("fizzbuzz ");
	});

	it("prints fizz when the number is multiple of 3", function(){
		expect(fb.replace(3)).toBe("fizz ");
	});

	it("prints buzz when the number is multiple of 5", function(){
		expect(fb.replace(5)).toBe("buzz ");
	});
});

