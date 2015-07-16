


//console.log(locators.domainsearchpage.domainName);

// var locators = {
// 	"domainsearchpage": {
// 	"inputs" :
// 	{
// 		"domainName": "element(By.name('formDomainSearch')).element(By.name('query'))"
// 	},
// 	"buttons": 
// 	{
// 		"searchBtn" : "element(By.name('formDomainSearch')).element(By.css('.element-group>button'))"
// 	}
// }
// };

//var dropdownPrice = require('../spec.js');
var dropdownData = require('../testData/testdata.json');

//var priceyr = dropdownPrice.yr;
//console.log(dropdownPrice.yr);
//console.log(yr);

var utildata = function(){

	

	var locators = {
		
		"domainsearchpage": {
			"domainName": element(By.name('formDomainSearch')).element(By.name('query')),
			"searchBtn" : element(By.name('formDomainSearch')).element(By.css('.element-group>button'))
		},
		"domainsearchresults":{
			"domAvail": element(By.css('.cell h2')).getText(),
			"resultsBtn": $('.pg-banner button.mit-button')
		},
		"ordersummary":{
			"item": element(By.css('.cs-group.cart-box.ng-scope h2')).getText(),
			"price": $('select[ng-model="item.key"]'),
			//"price": $('select[ng-model="item.key"]').element(By.cssContainingText('option', dropdownPrice.year)),
			//"price": element(by.cssContainingText('option', '2 Years')),
			"summarybtn": $('.pg-body.ng-scope a.btn.red')
		},		

		// getOrderSummaryPrice: function(){
			
 	// 		var year = dropdownPrice.year;
 	// 		return year;
		// },

		"orderLogin":{
			"username": $('.flip-pane.front.cart-box.rc input[id="username"]'),
			"password": $('.flip-pane.front.cart-box.rc input[id="password"]'),
			"loginbtn": $('form[name="loginForm"] button.btn.red')
		},

		"gtldupsell":{
			"privreg": $('form[name="privateRegistrationForm"] .checkbox-list input[name="domain"]'),
			"privregbtn": $('form[name="privateRegistrationForm"] button.btn.red'),
			"cloudhosting": $('form[name="cloudHostingForm"] .checkbox-list input[name="domain"]'),
			"cloudhostingbtn": $('form[name="cloudHostingForm"] button.btn.red'),
			"difm": $('form[name="difmForm"] .checkbox-list input[name="domain"]'),
			"difmbtn": $('form[name="difmForm"] button.btn.red'),

			"sitelock": $('form[name="sitelockForm"] .checkbox-list input[name="domain"]'),
			"sitelockbtn": $('form[name="sitelockForm"] button.btn.red')			
		},
		
		"orderpayment":{
			"ccno": element(By.id('number')),
			"ccv": element(By.id('cvv')),
			"ccmonth": $('select[id="expiryMonth"]').element(By.cssContainingText('option', dropdownData.ccmonth)),
			"ccyr": $('select[id="expiryYear"]').element(By.cssContainingText('option', dropdownData.ccyear)),
			//"ccmonth": $('select[id="expiryMonth"]').element(By.cssContainingText('option', "March")),
			//"ccyr": $('select[id="expiryYear"]').element(By.cssContainingText('option', "2017")),
			"ccname": element(By.id('name')),
			"paymentbtn": $('form[name="ccForm"] button.btn.red')			
		},

		"orderconf":{
			"ordercomplete": element(By.css('.pg-body.ng-scope h1')).getText(),
			"orderid": element(By.css('.summary p')).getText()
		},
		getLocator : function(page,elementname){
			var self = this;
			return self[page][elementname];
		},
		// setElementValue: function(page, element, value){
		// 	var self = this;
		// 	console.log("within setvalue= " + value);
		// 	self.page.elementname.val(value);
		// 	//self[page][elementname].val(value);
		// 	//console.log(self[page][elementname].val(value));
		// }
		//
		// getYears: function(a, b){
		// 	return '5 Years';
		// }
	};
	return locators;
};

module.exports = new utildata();
				
				//console.log(randStrg);
			    //var dom = 'test' + randStrg + domspace;
			    //var dom = 'test' + randStrg + prodspace;
		    	

				//Searching a dmain
// 		    	var domname = element(By.name('formDomainSearch')).element(By.name('query'));//$('form[name="formDomainSearch"] input[name="query"]')
// 		    	domname.sendKeys(dom);
// 		    	.click();
// 		    	browser.waitForAngular();
		    	
// 		    	//Continues from domain search results
// 		    	expect(element(By.css('.cell h2')).getText()).toEqual('is available');
// 		    	$('.pg-banner button.mit-button').click();
// 		    	//$('button[ng-click="ctaAddaToCart(ctaFlag)"]').click();
// 		    	browser.waitForAngular();

// 		    	//This is the order summary page
// 		    	expect(element(By.css('.cs-group.cart-box.ng-scope h2')).getText()).toEqual(dom);
// 		    	element(By.cssContainingText('option', yr)).click();
// 		    	$('.pg-body.ng-scope a.btn.red').click();
// 		    	browser.waitForAngular();

// 		    	//This is the login page
// 		    	$('.flip-pane.front.cart-box.rc input[id="username"]').sendKeys(user);
// 		    	$('.flip-pane.front.cart-box.rc input[id="password"]').sendKeys(pass);
// 		    	//element(By.id('username')).sendKeys('testotext3');
// 		    	//element(By.id('password')).sendKeys('testotext3');
// 		    	$('form[name="loginForm"] button.btn.red').click();
// 		    	browser.waitForAngular();

// 		    	//These are for the upsell pages
// 		    	$('form[name="privateRegistrationForm"] .checkbox-list input[name="domain"]').click();
// 		    	//element(By.name('domain')).click();
// 		    	$('form[name="privateRegistrationForm"] button.btn.red').click();
// 		    	//$('.pg-body.ng-scope button.btn.red').click();
// 		    	browser.waitForAngular();

// 		    	$('form[name="cloudHostingForm"] .checkbox-list input[name="domain"]').click();
// 		    	//element(By.name('domain')).click();
// 		    	$('form[name="cloudHostingForm"] button.btn.red').click();
// 		    	//$('.pg-body.ng-scope button.btn.red').click();
// 		    	browser.waitForAngular();

// 		    	$('form[name="sitelockForm"] .checkbox-list input[name="domain"]').click();
// 		    	//element(By.name('domain')).click();
// 		    	$('form[name="sitelockForm"] button.btn.red').click();
// 		    	//$('.pg-body.ng-scope button.btn.red').click();
// 		    	browser.waitForAngular();


// 		    	//This is for the payment page
// 		    	element(By.id('number')).sendKeys(ccno);
// 		    	element(By.id('cvv')).sendKeys(ccv);
// 		    	$('select[id="expiryMonth"]').element(By.cssContainingText('option', ccmth)).click();
// 		    	$('select[id="expiryYear"]').element(By.cssContainingText('option', ccyr)).click();
// 		    	element(By.id('name')).sendKeys(ccname);
// 		    	$('form[name="ccForm"] button.btn.red').click();
// 		    	browser.waitForAngular();

// 		    	//assert results on order confirmation
// 		    	expect(element(By.css('.pg-body.ng-scope>h1')).getText()).toEqual("Order Complete");
// 		    	var oid = element(By.css('.summary>p')).getText();

// 		    	oid.then(function(order) {
// 		  		console.log(order);
// 				});
// 		    	//console.log(oid);
// 		    	expect(oid).toMatch(/Your Order number is:\.*/);
// 		    	browser.waitForAngular();

// 		    	browser.executeScript('window.sessionStorage.clear();');
// 		    	browser.executeScript('window.localStorage.clear();');
// 		    	//browser.sleep(60000);
// 			//}, 60000);
// 		}
// 		catch(e) {
// 			continue;
// 			}

// 		}			
	    
// 	    afterEach(function() {
// 	    	//ptor.ignoreSynchronization = false;
// 			browser.manage().logs().get('browser').then(function (browserLog) {
// 				expect(browserLog.length).toEqual(0);
// 				if (browserLog.length) {
// 					console.error('log: ' + JSON.stringify(browserLog));
// 				}
// 			});

// 	    	browser.executeScript('window.sessionStorage.clear();');
// 	    	browser.executeScript('window.localStorage.clear();');
// 	    });
   


//     });
// });