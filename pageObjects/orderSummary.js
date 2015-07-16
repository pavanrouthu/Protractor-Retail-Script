
var utils = require('../utility/util.js');
// var dropdownPrice = require('../spec.js');


			//exports.orderSummary = function(dom, yr){
				exports.orderSummary = function(dom){
				//this.yr = yr;
				//console.log(this.yr);
			   	//try{
				//var domain = require('./spec.js');
		    		
					//Searching a domain
					browser.waitForAngular();
					var orderitm = utils.getLocator('ordersummary','item');
					
					//var price = utils.setElementValue('ordersummary', 'price', dropdownPrice.year);
					var price = utils.getLocator('ordersummary','price');
					
					
					//console.log(price);
					var summarybtn = utils.getLocator('ordersummary','summarybtn');
		    	//This is the order summary page
		    	expect(orderitm).toEqual(dom);
		    	//ordersum.setValue(yr);
		    	price.click();
		    	summarybtn.click();
		    	browser.waitForAngular();

		    		
				// }
				// catch(e) {
				// 	continue;
				// }
			};

//module.exports = new domsearch(dom);