var App = {
	navTimeout: null,
	headerSlideUp: function() {
		this.header.css({
			'top': '0',
			'margin-top': '0'
		});
	},
	headerSlideDown: function() {
		this.header.removeAttr('style');
	},
	navMouseEnter: function() {
		if (this.navTimeout) {
			window.clearTimeout(this.navTimeout);
			this.navTimeout = null;
		}
		this.headerSlideUp();
	},
	navMouseLeave: function() {
		var self = this;
		this.navTimeout = window.setTimeout(function(){
			self.headerSlideDown();
		}, 150);
	},
	initialize: function() {
		this.header = $('header');
		this.nav = $('nav#projects ul');

		this.nav.on('mouseenter', $.proxy(this.navMouseEnter, this));
		this.nav.on('mouseleave', $.proxy(this.navMouseLeave, this));
	}
};

$(document).ready(function(){
	App.initialize();
});