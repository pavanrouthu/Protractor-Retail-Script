
var utils = require('../utility/util.js');


			exports.domsearch = function(dom){
			   	//try{
				//var domain = require('./spec.js');
		    		
					//Searching a domain
					var domsearch = utils.getLocator('domainsearchpage','domainName');
					var dombtn = utils.getLocator('domainsearchpage','searchBtn');
					//console.log(domsearch);
					domsearch.sendKeys(dom);
					dombtn.click();

				
					browser.waitForAngular();
		    		
				// }
				// catch(e) {
				// 	continue;
				// }
			};

//module.exports = new domsearch(dom);