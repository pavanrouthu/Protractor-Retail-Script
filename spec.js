
var uuid = require('node-uuid');
var data = require('./testData/testdata.json');
var domsearch = require('./pageObjects/domainSearch.js');
var domres = require('./pageObjects/domainSearchResults.js');
var ordersum = require('./pageObjects/orderSummary.js');
var login = require('./pageObjects/loginPage.js');
var gtldupsell = require('./pageObjects/gtldUpsellPages.js');
var cctldupsell = require('./pageObjects/cctldUpsellPages.js');
var newgtldupsell = require('./pageObjects/newgtldUpsellPages.js');
var payment = require('./pageObjects/orderPayment.js');
var orderconf = require('./pageObjects/orderConfirmation.js');


describe('Verify Order Flow', function(){
	
	
	it('should be able to search and order a domain', function(){

    beforeEach(function() {
		//To clear local and session storage before starting a run
		browser.executeScript('window.localStorage.clear();');
		browser.executeScript('window.sessionStorage.clear();');
	});

    	//Fetches test data from the json datasource
		var prod = data.products;
		var user = data.username;
		var pass = data.password;
		var ccno = data.ccnumber;
		var cctype = data.cctype;
		var ccmth = data.ccmonth;
		var ccyr = data.ccyear;
		var ccv = data.ccv;
		var ccname = data.ccname;


		for(var i=0; i < prod.length; i++){

		try{
				//Fetches data about the Product from the json datasource
				var prodArray = prod[i];
				var prodname = prodArray.names;
				var prodspace = prodArray.domainspace;
				var yr = prodArray.Yr;

				//This reads the web application from the conf.js
				browser.get('');

				//To clear local and session storage before loading each and every product
				browser.executeScript('window.localStorage.clear();');
				browser.executeScript('window.sessionStorage.clear();');
			    browser.waitForAngular();

			    //A unique domain name is generated
				var randStrg = uuid.v1();
				var dom = 'test' + randStrg + prodspace;
			    //console.log(dom);
			    

			    //All the domainspaces are defined here
		        var gtld = [".net",".com",".info", ".biz",".org", ".mobi"];
		        var autld = [".com.au", ".net.au", ".org.au", ".asn.au",".id.au"];
		        var cctld = [".ac.nz",".at",".be",".ca",".cc",".ch",".co",".co.at",".co.il",".co.nz",".co.uk",".co.za",".com.co",".com.es",".com.fj",".com.hk",".com.ph",".com.sg",".com.tw",".de",".geek.nz",".gen.nz",".hk",".it",".jp",".la",".maori.nz",".net.co",".net.nz",".nl",".nom.co",".nz",".org.nz",".ph",".school.nz",".to",".travel",".tv",".ws",".xxx"];
		        var newgtld = [".bid",".buzz",".club",".kiwi",".melbourne",".sydney",".pictures",".academy",".associates",".bargains",".bike",".boutique",".builders",".cab",".camera",".camp",".cards",".care",".cash",".catering",".cheap",".church",".cleaning",".clothing",".coffee",".community",".computer",".construction",".contractors",".cool",".deals",".digital",".direct",".discount",".domains",".enterprises",".estate",".events",".exchange",".fail",".farm",".fish",".fitness",".florist",".foundation",".gifts",".glass",".gripe",".guide",".guru",".house",".industries",".kitchen",".land",".life",".limited",".marketing",".media",".parts",".place",".plumbing",".productions",".properties",".rentals",".repair",".sarl",".services",".shoes",".singles",".solar",".supply",".tools",".town",".toys",".training",".vacations",".vision",".watch",".works",".world",".wtf",".zone",".agency",".business",".center",".city",".company",".directory",".education",".email",".equipment",".exposed",".gallery",".graphics",".gratis",".institute",".international",".lighting",".management",".network",".photography",".photos",".reisen",".report",".schule",".solutions",".supplies",".support",".systems",".technology",".tips",".today",".capital",".careers",".claims",".clinic",".codes",".condos",".cruises",".dating",".delivery",".dental",".diamonds",".engineering",".expert",".finance",".financial",".flights",".fund",".furniture",".healthcare",".holdings",".holiday",".insure",".lease",".limo",".maison",".partners",".pizza",".recipes",".restaurant",".surgery",".tax",".tienda",".university",".ventures",".viajes",".villas",".voyage",".accountants",".credit",".creditcard",".energy",".investments",".loans"];
		        


			    //**** gTLD Order Flow ****
			    if (prodname == "null" && (gtld.indexOf(prodspace) > -1)){

				    //This is the domain search page
					domsearch.domsearch(dom);

					//This is the domain search results page.
					domres.domsearchres();

					//This is the order summary page.
					browser.waitForAngular();
					ordersum.orderSummary(dom, yr);
					
			    	//This is the login page
			    	browser.waitForAngular();
			    	login.loginOrder(user,pass);
					browser.waitForAngular();

			    	//These are for the upsell pages
			    	gtldupsell.gtldupsell();

			    	//This is for the payment page
					payment.orderpayment(ccno, ccv, ccname);
					browser.waitForAngular();
					browser.driver.sleep(80);

			    	//assert results on order confirmation
					orderconf.orderconfirmation();
					browser.waitForAngular();
					browser.driver.sleep(30);
				}
				//**** End gTLD Order Flow ****



				//**** ccTLD Order Flow ****
			    if (prodname == "null" && (cctld.indexOf(prodspace) > -1)){

				    //This is the domain search page
					domsearch.domsearch(dom);
    	
					//This is the domain search results page.
					domres.domsearchres();

					//This is the order summary page.
					browser.waitForAngular();
					ordersum.orderSummary(dom, yr);
					
			    	//This is the login page
			    	browser.waitForAngular();
			    	login.loginOrder(user,pass);
					browser.waitForAngular();

			    	//These are for the upsell pages
			    	cctldupsell.cctldupsell();

			    	//This is for the payment page
					payment.orderpayment(ccno, ccv, ccname);
					browser.waitForAngular();
					browser.driver.sleep(80);

			    	//assert results on order confirmation
					orderconf.orderconfirmation();
					browser.waitForAngular();
					browser.driver.sleep(30);
				}
				//**** End ccTLD Order Flow ****

				
				
				//**** newgTLD Order Flow ****
			    if (prodname == "null" && (newgtld.indexOf(prodspace) > -1)){

				    //This is the domain search page
					domsearch.domsearch(dom);
	    	
					//This is the domain search results page.
					domres.domsearchres();

					//This is the order summary page.
					browser.waitForAngular();
					ordersum.orderSummary(dom, yr);
					
			    	//This is the login page
			    	browser.waitForAngular();
			    	login.loginOrder(user,pass);
					browser.waitForAngular();

			    	//These are for the upsell pages
			    	newgtldupsell.newgtldupsell();
			    	browser.waitForAngular();

			    	//This is for the payment page
					payment.orderpayment(ccno, ccv, ccname);
					browser.waitForAngular();
					browser.driver.sleep(80);

			    	//assert results on order confirmation
					orderconf.orderconfirmation();
					browser.waitForAngular();
					browser.driver.sleep(30);
				}
				//**** End newgTLD Order Flow ****

				//Clears the local and session storage
		    	browser.executeScript('window.sessionStorage.clear();');
		    	browser.executeScript('window.localStorage.clear();');
		}
		catch(e) {
			continue;
			}

		}			
	    
	    afterEach(function() {
			browser.manage().logs().get('browser').then(function (browserLog) {
				expect(browserLog.length).toEqual(0);
				if (browserLog.length) {
					console.error('log: ' + JSON.stringify(browserLog));
				}
			});
	    	browser.executeScript('window.sessionStorage.clear();');
	    	browser.executeScript('window.localStorage.clear();');
	    	browser.close();
	    });
    });
});