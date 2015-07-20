
var utils = require('../utility/util.js');


			exports.newgtldupsell = function(){

			   		browser.waitForAngular();

					var hostingcheckbox = utils.getLocator('gtldupsell','cloudhosting');
					var hostingbtn = utils.getLocator('gtldupsell', 'cloudhostingbtn');
					
					var difmcheckbox = utils.getLocator('gtldupsell','difm');
					var difmbtn = utils.getLocator('gtldupsell', 'difmbtn');
			
					browser.waitForAngular();
					var sitelockcheckbox = utils.getLocator('gtldupsell','sitelock');
					var sitelockbtn = utils.getLocator('gtldupsell', 'sitelockbtn');

		    	//These are for the upsell pages

		    	//This clicks on the checkbox of the first upsell product page.
		    	element(By.name('domain')).click();

		    	//This clicks on the Continue button of the first upsell product page.
		    	element(By.xpath('html/body/div[1]/div/div/div/div/div[1]/form/div/div[3]/button[2]')).click();
		    	browser.waitForAngular();

		    	//This clicks on the Continue button of the second upsell product page.
				element(By.xpath('html/body/div[1]/div/div/div/div/div[2]/form/div/div[3]/button[2]')).click();
		    	browser.waitForAngular();
			};
