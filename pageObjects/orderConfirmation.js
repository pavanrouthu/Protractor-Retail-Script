
var utils = require('../utility/util.js');


			exports.orderconfirmation = function(){
			   	//try{
			browser.waitForAngular();
					var ordercomplete = utils.getLocator('orderconf','ordercomplete');
					var oid = utils.getLocator('orderconf', 'orderid');
					//console.log(oid);

		    	//assert results on order confirmation
		    	expect(ordercomplete).toBe("Order Complete");
		    	//var oid = orderid;

		    	oid.then(function(order) {
		  		console.log(order);
				});
		    	console.log(order);
		    	expect(oid).toMatch(/Your Order number is:\.*/);
		    	browser.waitForAngular();
				browser.driver.sleep(30);
		    		
				// }
				// catch(e) {
				// 	continue;
				// }
			};

//module.exports = new domsearch(dom);