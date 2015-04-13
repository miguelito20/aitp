	$(document).ready(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
				}
			}
		});
	});

	$(function() {
		$('#slides').slidesjs({
			width: 640,
			height: 360,
			navigation: false,
			start: 1,
			play: {
				auto: false
			}
		});

      /*
        To have multiple slideshows on the same page
        they just need to have separate IDs
      */
		$('#slides2').slidesjs({
			width: 640,
			height: 360,
			navigation: false,
			start: 2,
			play: {
				auto: false
			}
		});

		$('#slides3').slidesjs({
			width: 640,
			height: 360,
			navigation: false,
			start: 3,
			play: {
				auto: false
			}
		});
		$('#slides4').slidesjs({
			width: 640,
			height: 360,
			navigation: false,
			start: 1,
			play: {
				auto: false
			}
		});
	});

	$(document).ready(function() {
		$('.slides').slideUp( function() {
	    });
	});

	$(document).ready(function() {
	    $('#thumbnail1').on('click', function() {
		$('.slides').not( "#slides" ).slideUp( function() {
			$('#slides').slideDown( "slow", function() {
				$('html, body').animate( {
					scrollTop: $("#slides").offset().top-150
				}, 300);
			});
		});
	    });
	});
	$(document).ready(function() {
	    $('#thumbnail2').on('click', function() {
		$('.slides').not( "#slides2" ).slideUp( function() {
			$('#slides2').slideDown( "slow", function() {
				$('html, body').animate( {
					scrollTop: $("#slides2").offset().top-150
				}, 300);
			});
		});
	    });
	});
	$(document).ready(function() {
	    $('#thumbnail3').on('click', function() {
		$('.slides').not( "#slides3" ).slideUp( function() {
			$('#slides3').slideDown( "slow", function() {
				$('html, body').animate( {
					scrollTop: $("#slides3").offset().top-150
				}, 300);
			});
		});
	    });
	});
	$(document).ready(function() {
	    $('#thumbnail4').on('click', function() {
		$('.slides').not( "#slides4" ).slideUp( function() {
			$('#slides4').slideDown( "slow", function() {
				$('html, body').animate( {
					scrollTop: $("#slides4").offset().top-150
				}, 300);
			});
		});
	    });
	});

	$(document).ready(function() {
	    $('img#thumbnail1.thumbnail').on('mouseenter', function() {
		$('#caption1').show();
    			$(this).css({
       				 'text-decoration': 'underline',
        			'cursor': 'pointer'
  		  });
	    });
	    $('img#thumbnail1.thumbnail').on('mouseleave', function() {
		$('#caption1').hide();
  			  $(this).css({
   			   	'text-decoration': 'none',
	       		   	'cursor': 'default'
    			});
	    });
	});
	$(document).ready(function() {
	    $('img#thumbnail2.thumbnail').on('mouseenter', function() {
		$('#caption2').show();
    			$(this).css({
       				 'text-decoration': 'underline',
        			'cursor': 'pointer'
  		  });
	    });
	    $('img#thumbnail2.thumbnail').on('mouseleave', function() {
		$('#caption2').hide();
  			  $(this).css({
   			   	'text-decoration': 'none',
	       		   	'cursor': 'default'
    			});
	    });
	});
	$(document).ready(function() {
	    $('img#thumbnail3.thumbnail').on('mouseenter', function() {
		$('#caption3').show();
    			$(this).css({
       				 'text-decoration': 'underline',
        			'cursor': 'pointer'
  		  });
	    });
	    $('img#thumbnail3.thumbnail').on('mouseleave', function() {
		$('#caption3').hide();
  			  $(this).css({
   			   	'text-decoration': 'none',
	       		   	'cursor': 'default'
    			});
	    });
	});
	$(document).ready(function() {
	    $('img#thumbnail4.thumbnail').on('mouseenter', function() {
		$('#caption4').css({ "top": "70px", "left": "40px" });
		$('#caption4').show();
    			$(this).css({
       				 'text-decoration': 'underline',
        			'cursor': 'pointer'
  		  });
	    });
	    $('img#thumbnail4.thumbnail').on('mouseleave', function() {
		$('#caption4').hide();
  			  $(this).css({
   			   	'text-decoration': 'none',
	       		   	'cursor': 'default'
    			});
	    });
	});







