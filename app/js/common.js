$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

  // scroll
	$('a[href^="#"]').click(function () {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
