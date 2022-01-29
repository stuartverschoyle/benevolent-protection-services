/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

			$(".set > a").on("click", function(e) {
				e.preventDefault();
				if ($(this).hasClass("active")) {
				  $(this).removeClass("active");
				  $(this)
					.siblings(".acc-content")
					.slideUp(200);
				  $(".set > a i")
					.removeClass("fa-minus")
					.addClass("fa-plus");
				} else {
				  $(".set > a i")
					.removeClass("fa-minus")
					.addClass("fa-plus");
				  $(this)
					.find("i")
					.removeClass("fa-plus")
					.addClass("fa-minus");
				  $(".set > a").removeClass("active");
				  $(this).addClass("active");
				  $(".acc-content").slideUp(200);
				  $(this)
					.siblings(".acc-content")
					.slideDown(200);
				}
			  });		
			  
			  var lastScrollTop = 0;
			  $(window).scroll(function(){
				var st = $(this).scrollTop();
				var banner = $('.banner');
				setTimeout(function(){
				  if (st > lastScrollTop){
					banner.addClass('hide');
				  } else {
					banner.removeClass('hide');
				  }
				  lastScrollTop = st;
				}, 200);
			  });		

			  var hashTagActive = "";
			  $(".scroll").on("click touchstart" , function (event) {
				  if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
					  event.preventDefault();
					  //calculate destination place
					  var dest = 0;
					  if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
						  dest = $(document).height() - $(window).height();
					  } else {
						  dest = $(this.hash).offset().top;
					  }
					  //go to destination
					  $('html,body').animate({
						  scrollTop: dest
					  }, 1000, 'swing');
					  hashTagActive = this.hash;
				  }
			  });			  
})(jQuery);