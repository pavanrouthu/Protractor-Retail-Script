
var uuid = require('node-uuid');
var data = require('./testData/testdata.json');
var domsearch = require('./pageObjects/domainSearch.js');
var domres = require('./pageObjects/domainSearchResults.js');
var ordersum = require('./pageObjects/orderSummary.js');
var login = require('./pageObjects/loginPage.js');
var gtldupsell = require('./pageObjects/gtldUpsellPages.js');
var payment = require('./pageObjects/orderPayment.js');
var orderconf = require('./pageObjects/orderConfirmation.js');
var yr;

// var driverflow = function(){



describe('Verify Order Flow', function(){
	
	
	it('should be able to search and order a domain', function(){

    beforeEach(function() {
		//To clear local storage
		browser.executeScript('window.localStorage.clear();');
		browser.executeScript('window.sessionStorage.clear();');
	});


		var prod = data.products;
		var user = data.username;
		var pass = data.password;
		var ccno = data.ccnumber;
		var cctype = data.cctype;
		var ccmth = data.ccmonth;
		var ccyr = data.ccyear;
		var ccv = data.ccv;
		var ccname = data.ccname;

		//module.exports.ccmonth = ccmth;


		for(var i=0; i < prod.length; i++){

		try{

				var prodArray = prod[i];
				var prodname = prodArray.names;
				var prodspace = prodArray.domainspace;
				yr = prodArray.Yr;

				console.log(yr);
				
				//module.exports.year = yr;

							
				//console.log(yr);
				//module.exports = {year: yr};
				module.exports = yr;
				
				browser.get('');
			    browser.waitForAngular();
				var randStrg = uuid.v1();
				
			    var dom = 'test' + randStrg + prodspace;
			    console.log(dom);
			    //console.log(yr);
			    //module.exports.dom = dom;

			    //This is the domain search page
				domsearch.domsearch(dom);
				//console.log(domresult);
		    	

				//This is the domain search results page.
				domres.domsearchres();


				//This is the order summary page.
				//yrData = yr;
				//global.year = yr;
				browser.waitForAngular();
				ordersum.orderSummary(dom);
				

		    	//This is the login page
		    	login.loginOrder(user,pass);
				browser.waitForAngular();

		    	//These are for the upsell pages
		    	gtldupsell.gtldupsell();


		    	//This is for the payment page
				payment.orderpayment(ccno, ccv, ccname);
				browser.waitForAngular();
		    	//assert results on order confirmation
				orderconf.orderconfirmation();
				browser.waitForAngular();
				browser.driver.sleep(30);
		    	//browser.executeScript('window.sessionStorage.clear();');
		    	//browser.executeScript('window.localStorage.clear();');
		    	//browser.sleep(60000);
			//}, 60000);
		}
		catch(e) {
			continue;
			}

		}			
	    
	    afterEach(function() {
	    	//ptor.ignoreSynchronization = false;
			browser.manage().logs().get('browser').then(function (browserLog) {
				expect(browserLog.length).toEqual(0);
				if (browserLog.length) {
					console.error('log: ' + JSON.stringify(browserLog));
				}
			});

	    	browser.executeScript('window.sessionStorage.clear();');
	    	browser.executeScript('window.localStorage.clear();');
	    });
   


    });
});
// };
// module.exports = new driverflow();
