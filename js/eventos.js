$(document).ready(function() {
	$('#camColor').mouseenter(function() {
		$('#camColor').css('background-color', '#37024D');
	});
	$('#camColor').mouseleave(function() {
		$('#camColor').css('background-color', 'black');
	});

	//
	$('input').focus(function() {
        $('input').css('outline-color','#FD6529');
    });

	//
	$('.slide').mouseenter(function() {
		$('.slide').slideToggle('slow');
	});

	//
	$('#animImg').mouseover(function() {
		$('#animImg').animate({'width': "100"});
	});
	
});



