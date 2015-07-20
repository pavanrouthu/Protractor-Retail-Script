
var utils = require('../utility/util.js');


			exports.orderconfirmation = function(){
				browser.driver.sleep(60);   		
				browser.waitForAngular();
				var ordercomplete = utils.getLocator('orderconf','ordercomplete');
				var oid = utils.getLocator('orderconf', 'orderid');

		    	//assert results on order confirmation
		    	expect(ordercomplete).toBe("Order Complete");
	
		    	//This fetches the order id from the order confirmation page
		    	oid.getText().then(function(order) {
		  		console.log(order);
		  		return order;
				});

		    	//Asserts the result
		    	expect(oid).toMatch(/Your Order number is:\.*/);
		    	browser.waitForAngular();
				browser.driver.sleep(30);
			};
