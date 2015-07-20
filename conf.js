exports.config = {
  seleniumAddress: 'http://127.0.0.1:4445/wd/hub',
  specs: ['spec.js'],
  baseUrl: 'https://stage.melbourneit.com.au/',
  allScriptsTimeout: 10000000,
  jasmineNodeOpts: {defaultTimeoutInterval: 50000000}
 
 // onPrepare: function() {
 //    require('jasmine-reporters');
 //    jasmine.getEnv().addReporter(
 //      new jasmine.JUnitXmlReporter(null, true, true, 'output'));
 //  }
};