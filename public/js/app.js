var App = {
	dom: {},
	fancyboxOptions: {
		helpers:  {
			overlay : {
				css : {
					'background' : 'transparent'
				}
			},
			title : {
				type : 'inside'
			}
		}
	},
	prepareGalleries: function() {
		var self = this;
		this.dom.galleries.each(function(i){
			var gallery = $(this),
				items = gallery.find('img');

			items.each(function(){
				var url = this.src,
					title = this.alt,
					linkEl = $('<a rel="gallery' + i + '" href="' + url + '" title="' + title + '">' + this.outerHTML + '</a>');

				$(this).replaceWith(linkEl);
			});

			var links = gallery.find('a');
			links.fancybox(self.fancyboxOptions);
		});
	},
	initialize: function() {
		this.dom.header = $('header');
		this.dom.nav = $('nav#projects ul');
		this.dom.galleries = this.dom.nav.find('.gallery');

		this.prepareGalleries();
	}
};

$(document).ready(function(){
	App.initialize();
});