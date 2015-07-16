
var utils = require('../utility/util.js');


			exports.domsearchres = function(){
			   	//try{
				//var domain = require('./spec.js');
		    		
					//Searching a domain
					var domres = utils.getLocator('domainsearchresults','domAvail');
					var resbtn = utils.getLocator('domainsearchresults','resultsBtn');
				//Continues from domain search results
		    	expect(domres).toEqual('is available');
		    	resbtn.click();
		    	//$('button[ng-click="ctaAddaToCart(ctaFlag)"]').click();
		    	browser.waitForAngular();
		    		
				// }
				// catch(e) {
				// 	continue;
				// }
			};

//module.exports = new domsearch(dom);