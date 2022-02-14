;(function($){
	$( document ).ready(function() {

		// Add class .swipebox to all links to images
		if(SwipeboxInit.autodetect.autodetectImage === true) {
			$('.postmsg a[href]').filter(function() {
			return /(\.jpg|\.jpeg|\.gif|\.png)/i.test( $(this).attr('href'));
			}).addClass("swipebox");

			// If link has not title, add img title/alt as title to links
			$('a.swipebox').filter(function(){

				// Check if image has title - else alt
				if ($(this).find('img').attr('title')){
					var title_img = $(this).find('img').attr('title');
				} else {
					var title_img = $(this).find('img').attr('alt');
				}

				if ($(this).not("[title]")){
					$(this).attr('title', title_img);
				}
			});
		}

		// Add class .swipebox to all links to Vimeo videos
		if(SwipeboxInit.autodetect.autodetectVideo === true) {

			$('a[href]').filter(function() {
				return /(?:www\.)?vimeo.com\/([0-9]+)/i.test( $(this).attr('href'));
			}).addClass('swipebox');

			// Add class .swipebox to all links to YouTube videos
			$('a[href]').filter(function() {
				return /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/i.test( $(this).attr('href'));
			}).addClass('swipebox');
		}

    // Remove .swipebox from selectors declared in admin
    $(SwipeboxInit.autodetect.autodetectExclude).removeClass('swipebox');

		// Add SwipeBox Script
		$( '.swipebox' ).swipebox( {
			useCSS : SwipeboxInit.lightbox.useCSS,
			useSVG : SwipeboxInit.lightbox.useSVG,
			initialIndexOnArray : 0,
			removeBarsOnMobile : SwipeboxInit.lightbox.removeBarsOnMobile,
			hideCloseButtonOnMobile : SwipeboxInit.lightbox.hideCloseButtonOnMobile,
			hideBarsDelay : SwipeboxInit.lightbox.hideBarsDelay,
			videoMaxWidth : SwipeboxInit.lightbox.videoMaxWidth,
			vimeoColor : SwipeboxInit.lightbox.vimeoColor,
			beforeOpen: null,
			afterOpen: null,
			afterClose: null,
			nextSlide: null,
			prevSlide: null,
			loopAtEnd: SwipeboxInit.lightbox.loopAtEnd,
			autoplayVideos: SwipeboxInit.lightbox.autoplayVideos,
			queryStringData: {},
			toggleClassOnLoad: '',
			selector: null
		} );

	});
})(jQuery);
