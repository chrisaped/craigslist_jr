$(document).ready(function() {

	$('#new_category_link').on("click", function(e){
		e.preventDefault();
		$.ajax({
			url: $(this).attr('href'),
			type: "get"
		}).done(function(response){
			$('#new_category').html(response);
			$('#new_category').slideDown();
		});
	});

	$('#submit_category').submit(function(e){
		e.preventDefault();
		var method = $(this).find('input[name=_method]').val() || $(this).attr('method');
		$.ajax({
			url: $(this).attr('action'),
			type: method,
			data: $(this).serialize()
		}).done(function(response){
			$('#categories-list').html(response);
			$('#new_category').slideUp();
		});
	});

	$('#new_post_link').on("click", function(e){
		e.preventDefault();
		$.ajax({
			url: $(this).attr('href'),
			type: "get"
		}).done(function(response){
			$('#new_post').html(response);
			$('#new_post').slideDown();
		});
	});

	$('#submit_post').submit(function(e){
		e.preventDefault();
		var method = $(this).find('input[name=_method]').val() || $(this).attr('method');
		$.ajax({
			url: $(this).attr('action'),
			type: method,
			data: $(this).serialize()
		}).done(function(response){
			$('#posts-list').html(response);
			$('#new_post').slideUp();
		});
	});

	
});
