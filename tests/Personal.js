module.exports = {
	'Check for presence of body and title of Personal page' : function(browser){
		browser
		.url('http://stage.cgu.iagdev.net/personal')
		.waitForElementVisible('body',2000)
		.assert.title('Personal Insurance - Make A Claim Online | CGU Insurance')
	},

	'Check for text in the big tabs region' : function(browser){
		browser
		.assert.containsText('nav.big-tabs','OUR INSURANCE PRODUCTS')
		.assert.containsText('nav.big-tabs','LEARN ABOUT INSURANCE')
	}
}