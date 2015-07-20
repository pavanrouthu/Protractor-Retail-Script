
var utils = require('../utility/util.js');

				exports.orderSummary = function(dom, yr){

			   	try{
				 		
					//Searching a domain
					browser.waitForAngular();
					var orderitm = utils.getLocator('ordersummary','item');

					var summarybtn = utils.getLocator('ordersummary','summarybtn');

		    		//This is the order summary page
		    		expect(orderitm).toEqual(dom);

		  			var priceoption = element(by.cssContainingText('option', yr));
		  
		  			priceoption.isPresent().then(function(result){
		  				if (result){
		  					element(by.cssContainingText('option', yr)).click();
						}
		  			});
		  			
		  			browser.waitForAngular();
		    		summarybtn.click();
		    		browser.waitForAngular();
				}
				catch(err) {
				console.log("Error in Summary file");
    			throw err;
				}
			};
