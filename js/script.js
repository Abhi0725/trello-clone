$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); //enabling bootstrap tooltip	
	$('a[href="#"]').click(function(e){
	    e.preventDefault();
	});
	
	$('.cards').hover(function(){
		$(this).children('.fold-effect').toggle(500);		   
	});
	
	$('.fa-pencil').click(function(){
		that = this;
		$(that).parents('.pull-right').hide();
		$(that).parents('.cards').find('span').hide(800);
		$(that).parents('.cards').find('input[type="text"]').show(800);
		$(that).parents('.cards').find('textarea').show(800);
		$(that).parents('.pull-right').siblings('.save-div').show(800);
		$(that).parents('.cards').find('#priority').hide();
	});
	
	$('.save-div').click(function(){
	    that = this;
		$(that).hide();
		$(that).siblings('.pull-right').show(800);
		$(that).parents('.cards').find('span').show(800);
		$(that).parents('.cards').find('input[type="text"]').hide(800);
		$(that).parents('.cards').find('textarea').hide(800);
		$(that).parents('.cards').find('#priority').val($(that).parents('.cards').find('#changedPriority').val());
		var input = $('input');
		input.trigger('input');
		$(that).parents('#newCard').hide(800);
	});
	
	$('#addCardBtn').click(function(){
	    $('#newCard').show(800);
		$('#newCard').find('input').show(800);
		$('#newCard').find('textarea').show(800);
		$('#newCard').find('.save-div').show(1200);
	});
	
	//$('.fa-trash-o').click(function(){
	  //  $(this).parents('.cards').fadeOut();
	//});
});