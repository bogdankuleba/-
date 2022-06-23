$(document).ready(function(){
	$('.visitors-slider').slick({
		dots:true,
		slidesToShow: 4,
		slidesToScroll: 3,
		speed: 1000,
		autoplay:true,
		autoplaySpeed:4000,
		responsive:[
		  {
		  	breakpoint:565,
		  	settings:{
		  		slidesToShow: 2,
		  	}
		  },
		   {
		  	breakpoint:565,
		  	settings:{
		  		slidesToShow: 1,
		  		slidesToScroll: 1,
		  	}
		  }

		]
	});

	$('.portfolio-wrapper').slick({
		dots:true,
		slidesToShow: 3,
		slidesToScroll: 2,
		speed: 1000,
		autoplay:true,
		autoplaySpeed:4000,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		responsive:[
		  {
		  	breakpoint:768,
		  	settings:{
		  		slidesToShow: 2,
		  	}
		  },
		  {
		  	breakpoint:565,
		  	settings:{
		  		slidesToShow: 1,
		  		slidesToScroll: 1
		  	}
		  }
		]
	});

	$('.clients').slick({
		dots:true,
		slidesToShow: 3,
		slidesToScroll: 2,
		speed: 1000,
		autoplay:true,
		autoplaySpeed:4000,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		responsive:[
		  {
		  	breakpoint:768,
		  	settings:{
		  		slidesToShow: 2,
		  	}
		  },
		  {
		  	breakpoint:565,
		  	settings:{
		  		slidesToShow: 1,
		  		slidesToScroll: 1
		  	}
		  }
		]
	});


	$('.news-wrapper_slick').slick({
		dots:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		autoplay:true,
		autoplaySpeed:4000,
		pauseOnHover:true,
		pauseOnDotsHover:true
	});



	$('.cleaning-form__btn').on('click', function(){
		$('.cleaning-form__mark').toggle();
	})

	$('.burger-btn').on('click', function(){
		$('.burger-contents').addClass('active');
	})

	$('.admin__img').on('click', function(){
		$('.burger-contents').removeClass('active');
	})

	$('.categories__list-office').on('click', function(){
		$('.categories__img-two').toggle();
		$('.categories-office').toggle();
	})

});