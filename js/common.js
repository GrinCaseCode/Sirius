$(document).ready(function() {


	//плавный скролл
	$(".menu a, .link-scroll").mPageScroll2id({
		offset: 80
	});


//кнопка sandwich
$(".sandwich").click(function() {
	$(this).toggleClass("active");
	if ($(".menu-mobile").is(":hidden")) {
		$(".menu-mobile").slideDown(200);
		$("body").addClass("no-scroll");
		$(".menu-overlay").fadeIn(200);
	} else {
		$(".menu-mobile").slideUp(200);
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
	}
});

$(".head-modal .tags__item").click(function(e) {
	e.preventDefault();
	$(this).toggleClass("active");
});

$(".menu-overlay, .menu-mobile .menu a").click(function() {
	$(".menu-mobile").slideUp(200);
	$(".menu-overlay").fadeOut(200);
	$(".sandwich").removeClass("active");
	$("body").removeClass("no-scroll");
});

$(".item-list .title-middle").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-list").removeClass("active");
    $(this).parent().siblings(".item-list").find(".item-list__content").slideUp(200);
  });

//search
$(".open-search").click(function() {
	
	if ($(".header-search").is(":visible")) {
		$(".header-search").fadeOut(200);
	} else {
		$(".header-search").fadeIn(200);
	}
	$(".header-search").find("input[type='text']").focus();
});

$(".close-search").click(function() {
	$(".header-search").fadeOut(200);
});

$(document).mouseup(function (e) {
    var container = $(".header-search");
    if (container.has(e.target).length === 0){
		$(".header-search").fadeOut(200);
    }
  });

	//слайдер

	$('.slider-wrapper').each(function(index, element) {
		var $slider = $(element);

		$slider.find('.slider-cards').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		variableWidth: true,
		centerMode: true,
		appendArrows: $slider.find('.slick-arrows'),
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerMode: false,
				}
			},
			]
		});

});

$(".cookie .btn-main").click(function(e) {
	e.preventDefault();
	$(".cookie").fadeOut(200);
});

$(".item-step").click(function() {
	$(this).siblings(".item-step").removeClass("active");
	$(this).siblings(".item-step").find(".item-step__hidden").slideUp(200);
	$(this).toggleClass("active");
	$(this).find(".item-step__hidden").slideToggle(200);
});

$(".item-card .btn-circle").click(function(e) {
	e.preventDefault();
	$(this).toggleClass("active");
	$(this).parent().parent().parent().find(".item-card__hidden").slideToggle(200);
});

	$(".input-phone").mask("+7 (999) 999-99-99");

	$('.slider-for-billbord').slick({
		arrows: true,
		dots: false,
		infinite: false,
		vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		asNavFor: '.slider-nav-billbord',
		appendArrows: $(".arrows-billbord"),
		touchThreshold: 1000,
		speed: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><div/>',
	});

	$(window).on('resize', function() {
		$('.slider-for-billbord').slick('setPosition');
		setTimeout(() => {
			$('.slider-for-billbord').slick('setPosition');
		}, 2000);

		$('.slider-technologies-sub').slick('setPosition');
		setTimeout(() => {
			$('.slider-technologies-sub').slick('setPosition');
		}, 2000);
	});

	$('.slider-nav-billbord').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.slider-for-billbord',
		touchThreshold: 1000,
		focusOnSelect: true,
		speed: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-technologies-for').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-technologies-nav, .slider-technologies-sub',
		touchThreshold: 1000,
		speed: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><div/>',
	});

	$('.slider-technologies-nav').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.slider-technologies-for, .slider-technologies-sub',
		touchThreshold: 1000,
		focusOnSelect: true,
		speed: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					variableWidth: true,
					slidesToShow: 1,
					vertical: false,
					verticalSwiping: false,
				}
			}
			]
		});

	$('.slider-technologies-sub').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '.slider-technologies-for, .slider-technologies-nav',
		touchThreshold: 1000,
		focusOnSelect: true,
		speed: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13.9717L10.9717 3.99997L20.9434 13.9717" stroke="#2B2C40"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.9434 6.02832L10.9717 16L0.999951 6.02832" stroke="#2B2C40"/></svg><div/>',
	});
	
	$(".footer__block .title-section a.title-mail")
	.on( "mouseover", function() {
	  $(this).parent().parent().addClass("active");
	} )
	.on( "mouseout", function() {
	    $(this).parent().parent().removeClass("active");
	} );


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
		animationEffect: "fade", 
		animationDuration: 500, 
		afterShow: function(instance, current) {
		}
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

