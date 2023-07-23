const swiper = new Swiper(".mainSwiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop : false,
	mousewheel: true,
	speed: 500,
	navigation: {
		nextEl: ".swiper-button-next",
	}
});

$('.introduce > a').click(function(){
	setTimeout(function(){
		swiper.slideTo(1);
	}, 300);
})

$('.skills > a').click(function(){
	setTimeout(function(){
		swiper.slideTo(2);
	}, 300);
})

$('.works > a').click(function(){
	setTimeout(function(){
		swiper.slideTo(3);
	}, 300);
})

$('.pageTag > a').click(function(){
	setTimeout(function (){
		swiper.slideTo(0);
	}, 300);
})