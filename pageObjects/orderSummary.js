
var utils = require('../utility/util.js');
// var dropdownPrice = require('../spec.js');


			//exports.orderSummary = function(dom, yr){
				exports.orderSummary = function(dom, yr){
				//this.yr = yr;
				console.log("Inside ordersum"+ yr);
			   	//try{
				//var domain = require('./spec.js');
		    		
					//Searching a domain
					browser.waitForAngular();
					var orderitm = utils.getLocator('ordersummary','item');
					
					//var price = utils.setElementValue('ordersummary', 'price', yr);
					//var price = utils.getLocator('ordersummary','price');


					//console.log(price);
					var summarybtn = utils.getLocator('ordersummary','summarybtn');
		    	//This is the order summary page
		    	expect(orderitm).toEqual(dom);
		    	//ordersum.setValue(yr);
		    	
		  //   	var selectDropdownbyNum = function ( element, optionNum ) {
  		// 			if (optionNum){
    // 				var options = element.findElements(by.tagName('option'))   
		  //       		.then(function(options){
    //     					options[optionNum].click();
    //   					});
  		// 			}
				// };

		  //   	price.click();

		  		element(by.cssContainingText('option', yr)).click();


		    	summarybtn.click();
		    	browser.waitForAngular();

		    		
				// }
				// catch(e) {
				// 	continue;
				// }
			};

//module.exports = new domsearch(dom);