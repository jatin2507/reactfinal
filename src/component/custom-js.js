import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(document).ready(function () {

  // $(".mainmenu li a").click(function(){
  // 	$(".mainmenu > li a").removeClass("active");
  // 	$(this).addClass("active")
  // })

    $('.menu_navbar ul li').on('click', function () {
        $('.menu_navbar ul li').removeClass('active');
        $(this).addClass('active');
    });

  $('.filter_item li').click(function () {
    $('.filter_item li').removeClass("active");
    $(this).addClass("active")
  })

  // $('.mob_main_menu').hide();
  $('.mob_sub_menu').hide();

  $('.mobile_toggle_bar').click(function () {
    $('.mob_main_menu').slideToggle();
  });

  $('.mob_main_menu > li > a').click(function () {

    $(this).next('.mob_sub_menu').slideToggle();

  });

  // -----isotop js- -
  
  var $grid = $('.item_detail').isotope({
  });
  $('.filter_menu_item').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.filter_item li').click(function () {
    $('.filter_item li').removeClass("active");
    $(this).addClass("active")
  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      651: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  })

  var btn = $('.footer-top-bottom');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  var btn = $('.top-move');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  $(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.main_navbar').addClass('sticky');
		} else {
			$('.main_navbar').removeClass('sticky');
		}
	});

  // new wows().init();

});
