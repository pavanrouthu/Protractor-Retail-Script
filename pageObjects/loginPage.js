
var utils = require('../utility/util.js');


			exports.loginOrder = function(username, password){

					var uname = utils.getLocator('orderLogin','username');

					var pwd = utils.getLocator('orderLogin', 'password');

					var loginbtn = utils.getLocator('orderLogin','loginbtn');

		    	//This is the login page
		    	uname.sendKeys(username);
		    	pwd.sendKeys(password);
		    	loginbtn.click();
		    	browser.waitForAngular();
			};
