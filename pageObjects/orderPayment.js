
var utils = require('../utility/util.js');


			exports.orderpayment = function(ccno, ccv, ccname){
			   	//try{

					var ccnumber = utils.getLocator('orderpayment','ccno');
					var cvv = utils.getLocator('orderpayment', 'ccv');

					var ccmnth = utils.getLocator('orderpayment','ccmonth');
					var ccyear = utils.getLocator('orderpayment', 'ccyr');

					var creditrcardname = utils.getLocator('orderpayment','ccname');
					var paymentbutton = utils.getLocator('orderpayment', 'paymentbtn');

		    	//This is for the payment page
		    	ccnumber.sendKeys(ccno);
		    	cvv.sendKeys(ccv);
		    	ccmnth.click();
		    	ccyear.click();
		    	creditrcardname.sendKeys(ccname);
		    	paymentbutton.click();
		    	browser.driver.sleep(120);
		    	browser.waitForAngular();

		    		
				// }
				// catch(e) {
				// 	continue;
				// }
			};

//module.exports = new domsearch(dom);