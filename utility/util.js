var dropdownData = require('../testData/testdata.json');

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
			"summarybtn": $('.pg-body.ng-scope a.btn.red')
		},		
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
	};
	return locators;
};

module.exports = new utildata();