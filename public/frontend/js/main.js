/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Sticky Js
04. Backtotop Js
05. Common Js
06. Offcanvas Js
07. Search Js
08. Cartmini Js
09. Filter Js
10. Body overlay Js
11. Range slider Js
12. Nice Select Js
13. Year change slider Js
14. MagnificPopup Js
15. Wow Js
16. Ecommerce js
17. Line Animation Js
18. Counter Js
19. Header height Js
20. Click btn Js
21. Password Toggle Js
22. Select 2 Js
23. Date and time Js
24. Calernder Js
25. Chart Js
26. Scroll nav class add
27. Faq class add
28. Show more/ Show less js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	////////////////////////////////////////////////////
	// 02. Mobile menu js
	if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;

		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
				let self = $(this);
				let arrowBtn = document.createElement("BUTTON");
				arrowBtn.classList.add("dropdown-toggle-btn");

				// Append the arrow button after the link
				self[0].appendChild(arrowBtn);

				function toggleDropdown(e) {
						e.preventDefault();
						let self = $(this);
						let parent = self.parent();
						let submenu = parent.children(".tp-submenu, .tp-megamenu-main");

						self.toggleClass("dropdown-opened");
						parent.toggleClass("expanded");
						parent.parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened").find(".tp-submenu, .tp-megamenu-main").slideUp();

						submenu.slideToggle();
				}

				// Add event listeners to both the link and the button
				self.on("click", toggleDropdown);
				$(arrowBtn).on("click", toggleDropdown);
		});
	}

	// Mega menu hover width
	var homeDemoMenu = $('.main-menu .tp-megamenu-main');

	homeDemoMenu.each(function(){
		if($(this).children('.megamenu-demo-conteiner').length > 0){
			$(this).addClass('tp-megamenu-container')
		}

		if($(this).children('.megamenu-demo-academics').length > 0){
			$(this).addClass('tp-megamenu-academics')
		}

		if($(this).children('.megamenu-demo-courses').length > 0){
			$(this).addClass('tp-megamenu-courses')
		}

		if($(this).children('.megamenu-demo-fullwidth').length > 0){
			$(this).addClass('tp-megamenu-fullwidth')
		}
		
		if($(this).children('.megamenu-demo-small').length > 0){
			$(this).addClass('tp-megamenu-small')
		}
	})


	////////////////////////////////////////////////////
	// 03. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();	
		if (scroll < 200) {
			$("#header-sticky").removeClass("tp-header-sticky");
		} else {
			$("#header-sticky").addClass("tp-header-sticky");
		}

	});


	/////////////////////////////////////////////////
	// 04. back_to_top//////////////////
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	////////////////////////////////////////////////////
	// 05. Common Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	
	////////////////////////////////////////////////////
	// 06. Offcanvas Js
	  


	////////////////////////////////////////////////////
	// 07. Search Js
	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-search-close-btn").on("click", function () {
		$(".tp-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 08. cartmini Js
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});

	///////////////////////
	// filter offcanvas
	$(".filter-open-btn").on("click", function () {
		$(".filter__area").addClass("filter-opened");
	});
	$(".filter-close-btn").on("click", function () {
		$(".filter__area").removeClass("filter-opened");
	});

	////////////////////////////////////////////////////
	// 09. filter show
	$(".filter-show-btn").on("click", function () {
		$(".tp-filter-offcanvas-area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});

	$(".filter-close-btn").on("click", function () {
		$(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".filter-show-dropdown-btn").on("click", function () {
		$(".tp-filter-dropdown-area").toggleClass('filter-dropdown-opened');
	});


	////////////////////////////////////////////////////
	// 10. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".tp-search-area").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	///////////////////////////////////////////
	// 11. Range slider
	if ($('#slider-range').length > 0) {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	
		$("#slider-range-offcanvas").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount-offcanvas").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount-offcanvas").val("$" + $("#slider-range-offcanvas").slider("values", 0) +
			" - $" + $("#slider-range-offcanvas").slider("values", 1));
	}


	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('select').niceSelect();
	$('.tpd-select select').niceSelect();


	////////////////////////////////////////////////////
	// Active Class 
	$('.tp-plan-4-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.tp-plan-4-item').removeClass('active');
	})

	if ($('.tp-header-user-hover').length > 0) {
		window.addEventListener('click', function(e) {
				let clickedElement = e.target;

				$('.tp-header-user-hover').each(function() {
						if (this.contains(clickedElement)) {
								$(this).toggleClass('active');
						} else {
								$(this).removeClass('active');
						}
				});
		});
	}

	// class add js
	$('.tp-course-details-2-nav nav ul li').on('click', function () {
		$(this).addClass('current').siblings().removeClass('current');
	});
	
	
	////////////////////////////////////////////////////
	// . language
	if ($("#header-bottom__lang-toggle").length > 0) {
		window.addEventListener('click', function(e){

			if (document.getElementById('header-bottom__lang-toggle').contains(e.target)){
				$(".header-bottom__lang-submenu, .header-bottom__lang-submenu-2").toggleClass("open");
			}
			else{
				$(".header-bottom__lang-submenu, .header-bottom__lang-submenu-2").removeClass("open");
			}
		});
	}


 // Function to hide the parent section
	$('.hide-button').on('click', function(){
		$('.tp-announcement-area').slideUp(200);
	});

	$(document).ready(function(){
		$('.close').on('click', function(){
				$(this).toggleClass('active');
				$('.tpd-continue-learning-sidebar').toggleClass('d-none d-block');
		});
	});


	// home one
	var slider = new Swiper('.tp-slider-active', {
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: 3500,
		},
		// Navigation arrows
		pagination: {
			el: ".tp-program-dot",
			clickable: true,
		},
	});


	// home one
	var slider = new Swiper('.tp-program-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		// Navigation arrows
		pagination: {
			el: ".tp-program-dot",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// home one
	var swiper = new Swiper('.tp-testimonial-active', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: true,
		// Navigation arrows
		navigation: {
			nextEl: ".tp-testimonial-next",
			prevEl: ".tp-testimonial-prev",
		},
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// home one
	var swiper = new Swiper(".tp-instagram-active", {
		slidesPerView: 5,
		spaceBetween: 10,
		freeMode: false,
		loop: true,
		autoplay: {
			delay: 3500,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});


	// campus life 
	var swiper = new Swiper(".tp-campus-life-active", {
		slidesPerView: 'auto',
		spaceBetween: 130,
		loop: true,
		navigation: {
		  nextEl: ".tp-campus-next",
		  prevEl: ".tp-campus-prev",
		},
		breakpoints: {
			'1200': {
				spaceBetween: 130,
			},
			'768': {
				spaceBetween: 80,
			},
			'400': {
				spaceBetween: 50,
			},
		},
	});


	// home Two
	var slider = new Swiper('.tp-team-2-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".tp-team-2-next",
			prevEl: ".tp-team-2-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// home Two
	$('.tp-testimonial-2-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.tp-testimonial-2-avatar-active'
	});
	$('.tp-testimonial-2-avatar-active').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.tp-testimonial-2-active',
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 500,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				},
			},
		],
	});

	  
	// home Four
	var slider = new Swiper('.tp-program-4-active', {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".tp-program-4-next",
			prevEl: ".tp-program-4-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	  
	
	// home Five
	$('.tp-slider-5-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.tp-slider-5-arrow'
	  });
	  $('.tp-slider-5-arrow').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.tp-slider-5-active',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		centerPadding:"5px",
		arrows: false,
		responsive: [
			{
				breakpoint: 500,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerPadding: '15px',
				},
			},
		],
	});

		  
	// home Five
	var slider = new Swiper('.tp-brand-5-active', {
		slidesPerView: 6,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

		  
	// home Five
	var slider = new Swiper('.tp-trainer-5-active', {
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	// shop banner
	var slider = new Swiper('.tp-shop-banner-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		
		pagination: {
		  el: ".tp-shop-banner-dot",
		  clickable: true,
		},
	});


	//////////////////////////////////////////////////////
	// 13. year change slider js
	$(function() {
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			arrows: false,
			centerMode: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 3,
					}
				}
			]
		});
	});


	//////////////////////////////////////////////////
	// 14. magnificPopup img view
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	////////////////////////////////////////////////////
	// 15. Wow Js
	new WOW().init();

	
	/////////////////////////////////////////////
	// 16. Ecommerce js
	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
	
		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});


		$('.tp-checkout-payment-item label').on('click', function () {
			$(this).siblings('.tp-checkout-payment-desc').slideToggle(400);
			
		});
		

		$('.tp-color-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
		

		$('.tp-size-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
	
		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		$('.tp-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 18. Show Coupon Toggle Js
		$('.tp-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});
	
		////////////////////////////////////////////////////
		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});

	}
	tp_ecommerce();


	////////////////////////////////////////////////////
	// 17. Line Animation Js
	if ($('#productTabMarker').length > 0) {
		function tp_tab_line_2(){
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.tp-product-tab button');
			var itemActive = document.querySelector('.tp-product-tab .nav-link.active');

			// rtl settings
			var tp_rtl = localStorage.getItem('tp_dir');
			let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e){
				marker.style.left = e.offsetLeft+"px";
				marker.style.width = e.offsetWidth+"px";
			}
				
		
			item.forEach(link => {
				link.addEventListener('click', (e)=>{
					indicator(e.target);
				});
			});
			
			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;
			
			var precedingAnchorWidth = anchorWidthCounter();
		
		
			$(marker).css('display','block');
			
			$(marker).css('width', totalWidth);
		
			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.tp-product-tab button').each(function(index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft+"px";
					if(activeTest) {
					// Break out of the each function.
					return false;
					}
			
					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
			
					anchorWidths = anchorWidths + aTotalWidth;
	
				});
		
				return anchorWidths;
			}
		}
		tp_tab_line_2();
	}

	
	////////////////////////////////////////////////////
	// 18. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});
	

	//////////////////////////////////////////////////
	// 19. Header height
	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;
		$(".tp-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}


	//////////////////////////////////////////////////
	// 20. Click btn Js
	(function () {
		var actions = $('.tpd-action-inexact-btn');
		actions.each(function () {
			var action = $(this),
				button = action.find('.click'),
				body = action.find('.tpd-action-click-tooltip');
			button.on('click', function (e) {
				e.stopPropagation();
				if (!action.hasClass('active')) {
					actions.removeClass('active');
					action.addClass('active');
				} else {
					actions.removeClass('active');
				}
			});
			body.on('click', function (e) {
				e.stopPropagation();
			});
			$('html, body').on('click', function () {
				actions.removeClass('active');
			});
		});
	})();


	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	if($('.password-show-toggle').length > 0){

		var showBtn = $('.password-show-toggle');

		showBtn.each(function (e) {
			$(this).on('click', function(x){
				let inputField = $(this).parent().find('input');
				if(inputField.attr('type') === "password"){
					inputField.attr('type', 'text')
					$(this).children('.open-eye-icon').css({
						'display' : 'block'
					})
					$(this).children('.close-eye-icon').css({
						'display' : 'none'
					})
				}else{
					inputField.attr('type', 'password')
					$(this).children('.open-eye-icon').css({
						'display' : 'none'
					})
					$(this).children('.close-eye-icon').css({
						'display' : 'block'
					})
				}
			})
		})
	}


	////////////////////////////////////////////////////
	// 22. Select 2 Js
	if ($('.tpd-select2').length > 0) {
		$(document).ready(function() {
			$('.tpd-select2').select2({
				placeholder: 'Search Course Category. ex. Design, Development, Business',
				allowClear: true,
				tags: true
			});
		});
	}

	////////////////////////////////////////////////////
	// 23. Date and time js
	flatpickr("input[name='datetime-local']", {
		dateFormat: "Y-m-d"
	});


	////////////////////////////////////////////////////
	// 24. Calernder js
	if($('#calendar').length > 0){
		document.addEventListener('DOMContentLoaded', function() {
			var calendarEl = document.getElementById('calendar');
	
			var calendar = new FullCalendar.Calendar(calendarEl, {
				height: '600px',
				expandRows: true,
				slotMinTime: '08:00',
				slotMaxTime: '20:00',
				headerToolbar: {
					left: 'prev,next',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
				initialView: 'dayGridMonth',
				initialDate: new Date(),
				navLinks: true, // can click day/week names to navigate views
				editable: true,
				selectable: true,
			});
	
			calendar.render();
		});
	}

	
	////////////////////////////////////////////////////
	// 25. chart js
	if($('#chart').length > 0){

		var options = {
			chart: {
				type: 'line',
				 toolbar: {
            show: false
        }
			},
			series: [{
				name: 'Profit',
				data: [30,40,35,50,49,60,70,91,125],
				color: '#556DF5'
			}],
			xaxis: {
				categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
			}
		}
		
		var chart = new ApexCharts(document.querySelector("#chart"), options);
		
		chart.render();
	}


	/////////////////////////////////////////////
	// 26. Scroll nav class add
	if($('#course_details2_nav').length > 0){
		$(document).ready(function() {
			$('#course_details2_nav').onePageNav();
		});
	}

	////////////////////////////////////////
	// 27. Faq class add
	document.querySelectorAll('.faq-expend').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion-item');

        // Remove the 'expand' class from all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('expand');
        });

        // Add the 'expand' class to the clicked accordion item
        accordionItem.classList.add('expand');
			});
	});


	////////////////////////////////////////
	// 28. Show more/ Show less js
	if($('.show-more-button').length > 0){
		document.addEventListener('DOMContentLoaded', function () {
			const showMoreButton = document.querySelector('.show-more-button');
			const content = document.querySelector('.content');
	
			showMoreButton.addEventListener('click', function () {
				const svgIcon = showMoreButton.querySelector('.svg-icon');
				if (content.classList.contains('show')) {
					content.classList.remove('show');
					showMoreButton.innerHTML = '';
					svgIcon.innerHTML = `
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 1V11" stroke="#3C66F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M1 6H11" stroke="#3C66F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					`;
					showMoreButton.appendChild(svgIcon);
					showMoreButton.append('Show more');
				} else {
					content.classList.add('show');
					showMoreButton.innerHTML = '';
					svgIcon.innerHTML = `
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 6H11" stroke="#3C66F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					`;
					showMoreButton.appendChild(svgIcon);
					showMoreButton.append('Show less');
				}
			});
		});
	}


})(jQuery);