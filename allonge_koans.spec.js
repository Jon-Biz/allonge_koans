describe("chapter 1:", function() {

	xdescribe("as little as possible about functions but no less:", function() {
		it("an empty function is not 'no value' (null)", function() {

		  expect(
		  	function(){}
	  	).toBeNull();

		});
	});

	xdescribe("functions and identities:", function() {
		it("a function does not equal another, identical function", function() {

			expect(
				function(){}
			).toEqual(
				function(){}
			);

		});
	});

	xdescribe("applying functions:", function() {
	  it("applying a function returns", function() {

			expect(
				(function(){})()
			).toBeNull();

	  });
	  it("applying a function returns, but doesn't return anything", function() {

			expect(
				(function(){})()
			).not.toBeUndefined();	    

	  });
	});

	xdescribe("undefined:", function() {
		it("is it's own value type", function() {

			expect(
				typeof undefined
			).toEqual(
				''
			);

		});
		it("is equal to of others of it's value type", function() {

			expect(
				undefined
			).not.toEqual(
				undefined
			);

			expect(
				(function(){})()
			).not.toEqual(
				(function(){})()
			);

			expect(
				(function() {})()
			).not.toEqual(
				undefined
			);

		});
	});
	xdescribe("void:", function() {
	  it("there is a third way to generate undefined in javascript", function() {

			expect(
				void 0
			).not.toEqual(
				undefined
			);

			expect(
				void 1
			).not.toEqual(
				undefined
			);

			expect(
				void (2+2)
			).not.toEqual(
				undefined
			);

	  });
	});
	xdescribe("functions with no arguments and their bodies:", function() {
	  it("the return keyword should return a value", function() {

	    expect(
	    	function(){return 0}
    	).toEqual(

    	);

	    expect(
	    	function(){return 1}
    	).toEqual(

    	);

	    expect(
	    	function(){return 'Hello World'}
    	).toEqual(

    	);

	  });
	});
	describe("functions that evaluate to functions", function() {
	  });
	});
});