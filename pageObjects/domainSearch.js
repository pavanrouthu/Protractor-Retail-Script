
var utils = require('../utility/util.js');


			exports.domsearch = function(dom){

					var domsearch = utils.getLocator('domainsearchpage','domainName');
					var dombtn = utils.getLocator('domainsearchpage','searchBtn');
					domsearch.sendKeys(dom);
					dombtn.click();
					browser.waitForAngular();
			};
