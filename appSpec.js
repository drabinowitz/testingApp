describe("factorial()", function(){

	it("should perform a factorial on numbers between 1..5", function(){

		expect(factorial(1)).toBe(1);
		expect(factorial(2)).toBe(2);
		expect(factorial(3)).toBe(6);
		expect(factorial(4)).toBe(24);
		expect(factorial(5)).toBe(120);


	});

});

ddescribe("User", function(){

    var u;
    beforeEach(function() {
        u = new User("Shawn", "Black", 21);
    });

	it("should greet the user by first name and last name", function() {

		expect(greetUser(u)).toContain(u.firstName);
		expect(greetUser(u)).toContain(u.lastName);

	});

	it("should have an age greater than 20", function() {

		expect(u.age).toBeGreaterThan(20);

	});

});