module.exports = {
	beforeEach: function(browser,done){
		setTimeout(function(){
			done();
		},1000)
	},

	'Title and Body section' : function(browser){
		 browser.url('<url>')
		 browser.useCss().waitForElementVisible('body',2000)
		 browser.assert.title('Personal Insurance - Make A Claim Online | CGU Insurance')
	},

	'Header sectiom' : function(browser){
		 browser.useCss()
		 browser.expect.element('nav.site-nav ul').to.have.attribute('class').which.contains('menu')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(1) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/learn-about-insurance')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(2) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(3) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/claims')
		 browser.expect.element('nav.site-nav ul li.has-megamenu:nth-child(4) a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/contact')
	},

	'Big tab section' : function(browser){
		 browser.useXpath().assert.containsText("//nav[@class='big-tabs']/ul/li/a/h2[contains(text(),'Our insurance products')]",'OUR INSURANCE PRODUCTS')
		 browser.useXpath().assert.containsText("//nav[@class='big-tabs']/ul/li/a/h2[contains(text(),'Learn about insurance')]",'LEARN ABOUT INSURANCE')
	},

	'Product section' : function(browser){
		browser.useCss().expect.element('section.business-landing-products div.container div').to.be.visible
		browser.useXpath().assert.containsText("//div[@class='container']/div/div/h3[contains(text(),'Our most popular covers & products')]",'OUR MOST POPULAR COVERS & PRODUCTS')
		browser.useCss().expect.element('div.xs-accordian div:nth-child(1) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/car-insurance')
		browser.useCss().expect.element('div.xs-accordian div:nth-child(2) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/home-insurance')
		browser.useCss().expect.element('div.xs-accordian div:nth-child(3) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/boat-insurance')
		browser.useCss().expect.element('div.xs-accordian div:nth-child(4) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/travel-insurance')
		browser.useCss().expect.element('div.xs-accordian div:nth-child(5) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/residential-strata-insurance')
		browser.useCss().expect.element('div.xs-accordian div:nth-child(5) div:nth-child(2) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/caravan-insurance')
		browser.useCss().expect.element('div.xs-accordian div:nth-child(6) div.backface a').to.have.attribute('href').which.contains('http://stage.cgu.iagdev.net/personal/products/life-insurance')
	},

	'Insurance section' : function(browser){
		// browser.url("http://stage.cgu.iagdev.net/personal")
		browser.useXpath().expect.element("//section[5]/div[@class='container']").to.be.visible
		browser.useXpath().assert.containsText("//section[5]/div[@class='container']/div/div/h3[contains(text(),'What insurance is right for you?')]","WHAT INSURANCE IS RIGHT FOR YOU?")
		browser.useXpath().assert.containsText("//section[5]/div[@class='container']/div/div/h3[contains(text(),'How can we help?')]","HOW CAN WE HELP?")
		browser.useXpath().expect.element("//div[@id='edit_insurance_type_chosen']").to.be.visible
		browser.useXpath().expect.element("//input[@id='edit-adviser-location']").to.be.visible
		browser.useCss().expect.element('button.submit').to.be.visible
		browser.useCss().expect.element('div.make-a-claim h4').to.be.visible
		browser.useCss().expect.element('div.make-a-claim ul li:nth-child(1)').to.be.visible
		browser.useCss().expect.element('div.make-a-claim ul li:nth-child(2)').to.be.visible
		browser.useCss().expect.element('div.make-a-claim ul li:nth-child(3)').to.be.visible
	},

	'Insurance section: Insurance Claims' : function(browser){
		browser.useCss().click('div.make-a-claim ul li:nth-child(1)')
		browser.pause(5000)
		browser.assert.title('Insurance Claims - Lodge A Claim Online | CGU Insurance')
		browser.useCss().assert.containsText('header#content div.container div div:nth-child(4) h1','INSURANCE CLAIMS')
		browser.useCss().click('div.site-header img.cgu-logo')
		browser.pause(5000)
	},

	'Insurance section: Making a claim' : function(browser){
		browser.useCss().click('div.make-a-claim ul li:nth-child(2)')
		browser.pause(5000)
		browser.assert.title('Insurance Claims Process - How to Make a Claim | CGU Insurance')
		browser.useCss().assert.containsText('header#content div.container div div:nth-child(4) h1','MAKING A CLAIM')
		browser.useCss().click('div.site-header img.cgu-logo')
		browser.pause(5000)	
	},

	'Insurance section: Claims FAQ' : function(browser){
		browser.useCss().click('div.make-a-claim ul li:nth-child(3)')
		browser.pause(5000)
		browser.assert.title('Claims FAQs - Personal Insurance | CGU Insurance')
		browser.useCss().assert.containsText('header#content div.container div div:nth-child(4) h1','CLAIMS FAQ')
		browser.useCss().click('div.site-header img.cgu-logo')
		browser.pause(5000)	
	},

	'Learn about personal insurance' : function(browser){
		browser.useCss().expect.element('div.container div.learn-about-insurance').to.be.visible
		browser.useCss().assert.containsText('div.container div.learn-about-insurance h4','LEARN ABOUT PERSONAL INSURANCE')
		browser.useCss().click('div.container div.learn-about-insurance div.call-to-action a')
		browser.pause(5000)
		browser.useCss().assert.containsText('div.container div:nth-child(4) h1','LEARN ABOUT INSURANCE')
		browser.useCss().click('div.site-header img.cgu-logo')
		browser.pause(5000)
	},

	'We will help you see it through' : function(browser){
		browser.useCss().expect.element('div.well-help-you-see-it-through').to.be.visible
		browser.useCss().assert.containsText('div.well-help-you-see-it-through h4',"WE’LL HELP YOU SEE IT THROUGH")
		browser.useCss().expect.element('div.well-help-you-see-it-through ul li:nth-child(1) a').to.be.visible
		browser.useCss().expect.element('div.well-help-you-see-it-through ul li:nth-child(2) a').to.be.visible
		browser.useCss().expect.element('div.well-help-you-see-it-through ul li:nth-child(3) a').to.be.visible
	},

	'We will help you see it through: Request a certificate of currency' : function(browser){
		browser.useCss().click('div.well-help-you-see-it-through ul li:nth-child(1)')
		browser.pause(5000)
		browser.assert.title('Request Certificate of Currency | CGU Insurance')
		browser.useCss().assert.containsText('div.container div:nth-child(4) h1','REQUEST CERTIFICATE OF CURRENCY')
		browser.useCss().click('div.site-header img.cgu-logo')
		browser.pause(5000)
	},

	'We will help you see it through: Update your details' : function(browser){
		browser.useCss().click('div.well-help-you-see-it-through ul li:nth-child(2)')
		browser.pause(5000)
		browser.assert.title('Update Policy Details | CGU Insurance')
		browser.assert.containsText('div.container div:nth-child(4) h1','UPDATE POLICY DETAILS')
		browser.useCss().click('div.site-header img.cgu-logo')
		browser.pause(5000)
	},

	'We will help you see it through: Contact us' : function(browser){
		browser.useCss().click('div.well-help-you-see-it-through ul li:nth-child(3)')
		browser.pause(5000)
		browser.assert.title('Contact | CGU Insurance')
		browser.assert.containsText('div.container div:nth-child(4) h1','CONTACT')
		browser.useCss().click('div.site-header img.cgu-logo')
	},

	"News Website Feature" : function(browser){
		browser.useCss().assert.containsText("//h3[contains(text(),'NEW WEBSITE FEATURE')]",'NEW WEBSITE FEATURE')
		browser.useCss().assert.containsText("//h3[contains(text(),'LATEST NEWS')]","LATEST NEWS")
		browser.end()
	}
}
