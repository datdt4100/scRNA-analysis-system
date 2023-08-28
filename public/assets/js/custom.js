(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
  
  $("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
  });

  $(function() {
		// Calling Login Form
		$("#login_form").click(function() {
				$(".social_login").hide();
				$(".user_login").show();
				return false;
		});

		// Calling Register Form
		$("#register_form").click(function() {
				$(".social_login").hide();
				$(".user_register").show();
				$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
				$(".user_login").hide();
				$(".user_register").hide();
				$(".social_login").show();
				$(".header_title").text('Login');
				return false;
		});
  });

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    $("#exec_btn").prop('disabled', false);

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(this).addClass("active");
      }
  });


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

})(window.jQuery);

$(document).ready(function() {
  $("#fileUpload").submit(function(e) {
    e.preventDefault();
    var data = new FormData($('#fileUpload')[0]);
    
    $.ajax({
      url:'/file_upload',
      type: 'POST',
      contentType: false,
      processData: false,
      cache: false,
      data: data,
      success: function(res){
        $('#upfile_popup').css('display', 'none');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        //$('#upfile_popup').modal('toggle');
        var dsname = $('#InputName').val();
        dsname = dsname.charAt(0).toUpperCase() + dsname.slice(1);
        var dsfilename = document.getElementById('attached_file').files[0].name;
        var dstissue = $('#InputTissue').val();
        var dsyear = $('#InputYear').val();
        if (dsyear == ''){
          dsyear = new Date().getFullYear();
        }
        $('#fileUpload').each(function(){
          this.reset();
        });
        $(".naccs .menu div").removeClass("active");
        document.getElementById('ds_list').innerHTML = '<div class="active"><div class="thumb"><div class="row"><div class="col-lg-4 col-sm-4 col-12"><h4 name="' + dsfilename+ '">'+
        dsname +'</h4><span class="status">available</span></div><div class="col-lg-4 col-sm-4 d-none d-sm-block"><span class="category">'+ dstissue +'</span></div><div class="col-lg-4 col-sm-4 col-12"><h4>'+dsyear+'</h4></div></div></div></div>' + document.getElementById('ds_list').innerHTML;
        $("#exec_btn").prop('disabled', false);

        $('#fileUpload')[0].reset();
      },
      error: function(){
        alert('Error: In sending the request!');
      }
    })
    return false;
  });
});

$("#exec_btn").click(function(){
  var select = $(".naccs .menu div.active");
  if (select.length > 0){
    var filename = select.find('h4').attr('name');
    url = $(location).attr('href');
    url = url.substring(0, url.length) + '/exec';
    var data = {};
    data.filename = filename;
    //url = url+ "/?file="  + filename;
    //$(location).attr('href', url);
    //window.location.href =  url+ "?file="  + filename
    
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url,						
      success: function(data) {
        var html = $(".container .col-lg-12").html();
        html += '<div class="container-title" ><div class="title"><h5 class="heading">Result:</h5></div></div>';
        html += '<div class="naccs"><div class="grid"><div class="row"><div class="col-lg-12 align-self-center">Updating' + JSON.stringify(data) + '</div></div></div>';
        $(".container .col-lg-12").html(html);
        /*
        var curr_html = 
        $(".container-title .title").html('<h5 class="heading">Result:</h5>');
        $(".naccs .row .col-lg-12").html('<div>updating</div>');*/
        console.log('success');
        //$(location).attr('href', url);
        console.log(JSON.stringify(data));
      }
    });
  }
})