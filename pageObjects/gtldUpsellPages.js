
var utils = require('../utility/util.js');


			exports.gtldupsell = function(){
			   	//try{
			   		browser.waitForAngular();
					var privregcheckbox = utils.getLocator('gtldupsell','privreg');
					var privregbtn = utils.getLocator('gtldupsell', 'privregbtn');

					browser.waitForAngular();

					//var checktext = element(By.css('.pg-body.ng-scope upsell-content h2 b'));
					//var checktext = element(By.css($('form[name="difmForm"] upsell-content h2 b')));
					//var elementfinder = expect(checktext.getText()).toEqual('Website Hosting');
					//console.log(checktext);
					

					var hostingcheckbox = utils.getLocator('gtldupsell','cloudhosting');
					var hostingbtn = utils.getLocator('gtldupsell', 'cloudhostingbtn');
					
					var difmcheckbox = utils.getLocator('gtldupsell','difm');
					var difmbtn = utils.getLocator('gtldupsell', 'difmbtn');
				

					browser.waitForAngular();
					var sitelockcheckbox = utils.getLocator('gtldupsell','sitelock');
					var sitelockbtn = utils.getLocator('gtldupsell', 'sitelockbtn');

		    	//These are for the upsell pages
		    	privregcheckbox.click();
		    	//element(By.name('domain')).click();
		    	privregbtn.click();
		    	//$('.pg-body.ng-scope button.btn.red').click();
		    	browser.waitForAngular();

		    	//element(By.css('.button.btn.red')).click();
				element(By.xpath('html/body/div[1]/div/div/div/div/div[2]/form/div/div[3]/button[2]')).click();
		    	//element(checktext).getText().then(function(result) {
		    	//if($('form[name="difmForm"] .checkbox-list input[name="domain"]'))	

    // 				//if (expect(result).toBe('Website Hosting')) {
    // 				if (expect(element(by.css('.upsell-content h2 b')).getText()).toBe('Website Hosting'))
    // 				{
    //    		    		hostingcheckbox.click();
			 //    		hostingbtn.click();
    // 				} else {
    //     				difmcheckbox.click();
				// 		difmbtn.click();
   	// 				}
				// //});
				

				browser.waitForAngular();
		    	sitelockcheckbox.click();
		    	//element(By.name('domain')).click();
		    	sitelockbtn.click();
		    	//$('.pg-body.ng-scope button.btn.red').click();
		    	browser.waitForAngular();

		    		
				// }
				// catch(e) {
				// 	continue;
				// }
			};

//module.exports = new domsearch(dom);