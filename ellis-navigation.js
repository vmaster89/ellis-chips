// just a short JQuery functionality for my very own libary. 

$( function() { 
	$('.mynav').hide(); 
	$('.mynav').html( $('.menu').html() ); 
	$('#products-menu').hide(); 
	var winWidth = parseInt($(window).width()); 
	$(window).on('resize', function() { 
		winWidth = parseInt($(window).width()); 
	}); 
    // event shows top-navigation if scrolling 
	$(window).on('scroll', function() { 
		if ( ($('header').height() < $(window).scrollTop()) && ( winWidth > 992) ) { 
				$('.mynav').css('width', parseInt($('.header').width())); 
				$('.mynav').css('margin-left', parseInt( "-" + parseInt( $('.header').width() / 2 ))); 
				$('.mynav').fadeIn(); 
		} else { $('.mynav').fadeOut(); } 
	}); 
    // event shows hidden div for more options 
	$('#up').on('click', function() { $(window).scrollTop(0); }); 
	$($('.product-button')[1]).on('mouseover', function() { 
		if ( winWidth > 992 ) { 
			showproducts(); 
			$('#products-menu').show(); 
		}
	}).on('mouseout', function() { 
		$('#products-menu').hide(); 
	}); 
	$('#products-menu').on('mouseover', function() { 
		showproducts(); 
		$('#products-menu').show(); 
	}).on('mouseout', function() { 
		$('#products-menu').hide(); 
	}); 
	function showproducts() { 
		var offset = $($('.product-button')[1]).offset(); 
		$('#products-menu').css('left', offset.left); 
		$('#products-menu').css('top',$($('.product-button')[1]).position().top + $($('.product-button')[1]).height()); 
	} 
}); 