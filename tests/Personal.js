module.exports = {
	beforeEach: function(browser,done){
		setTimeout(function(){
			done();
		},1000)
	},

	'Check for presence of body and title of Personal page' : function(browser){
		browser
		 .url('http://stage.cgu.iagdev.net/personal')
		 .waitForElementVisible('body',2000)
		 .assert.title('Personal Insurance - Make A Claim Online | CGU Insurance')
	},

	'Verify the urls in the header region' : function(browser){
		browser
		 browser.expect.element('nav.site-nav ul').to.have.attribute('class').which.contains('menu')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(1) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/learn-about-insurance')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(2) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(3) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/claims')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(4) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/contact')
	},

	'Check for text in the big tabs region' : function(browser){
		browser
		 .assert.containsText('nav.big-tabs','OUR INSURANCE PRODUCTS')
		 .assert.containsText('nav.big-tabs','LEARN ABOUT INSURANCE')
		 .end()	
	},
}