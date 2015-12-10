var change = function(){
	$(this).addClass('colorChange');

var reset = function(){ $('.block').removeClass('colorChange');
		$('.block').addClass('resetColor');
		$('.block').removeClass('resetColor');
	};
};
$(document).ready(function(){



 var setUp = function(numSquares){
	var $newDiv = $('<div class="block"> </div>');
	for (var i = 0; i < numSquares * numSquares; i++) {
		$('#container').prepend($newDiv.clone());
	};
	var width = ($("#container").width())/ numSquares;  
	$(".block").css({"width":width ,"height":width});
	$('.block').hover(change);	

	
};

setUp(prompt("how many squares?"));



	
	
	$('button').on('click', function(){
		$('.block').remove();
		setUp(prompt("how many squares?"));
	});

	if ('') {};	

	$('#default').click(function(){
		$('.block').removeClass('gradient');
		$('.block').removeClass('trail');
		$('.block').addClass('resetColor');
		$('.block').removeClass('resetColor');
		$('.block').hover(change);

	});

	$('#gradient').click(function(){
		$('.block').mouseenter(function(){
			$(this).addClass('gradient');
			$(this).css('opacity', '+=.1');

		});
	});

	$('#trail').click(function(){
		$('.block').hover(function(){
			$(this).css('background-color', 'red');
			$(this).css('opacity', '1');
			$(this).fadeTo('slow', 0);
			$(this).css('opacity', '+=1');
		});
	});



	
	
});