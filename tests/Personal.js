module.exports = {
	'step one' : function(browser){
		browser
		.url('http://stage.cgu.iagdev.net/personal')
		.waitForElementVisible('body',1000)
		.end();
	}
}