
var utils = require('../utility/util.js');


			exports.domsearchres = function(){
		    		
					//Searching a domain
					var domres = utils.getLocator('domainsearchresults','domAvail');
					var resbtn = utils.getLocator('domainsearchresults','resultsBtn');

				//Continues from domain search results
		    	expect(domres).toEqual('is available');
		    	resbtn.click();
		    	browser.waitForAngular();
			};
