 $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $(".navbar").css("background" , "rgba(0,0,0,0.7)");   
	  }

	  else{
		  $(".navbar").css("background" , "rgba(0, 0, 0, 0)"); 
	  }
  });
$(document).ready(function(){
    var $grid =$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  }
});
    $('.show2').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
        $(".show2 a").removeClass("active");
        $(this).addClass("active");
});
    $('.wow').owlCarousel({
        
            loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
    });
    $('.owl').owlCarousel({
        
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
                  responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
                 
   
});
    $(".spinner").fadeOut(5000,function(){
 document.getElementById("spinner").style.display = "none";
document.querySelector("body").style.overflow = "auto";
    });
    $("ul li .nav-link").click(function(){
        $("ul li .nav-link").removeClass("active");
        $(this).addClass("active");
    });
     var counters = $(".counter");
        var countersQuantity = counters.length;
        var counter = [];

                 for (i = 0; i < countersQuantity; i++) {
                    counter[i] = parseInt(counters[i].innerHTML);
    
                 };

                  var count = function(start, value, id) {
                    var localStart = start;
                    setInterval(function() {
                      if (localStart < value) {
                        localStart++;
                        counters[id].innerHTML = localStart;
                      }
                    }, 60);
                  };

                  for (j = 0; j < countersQuantity; j++) {
                    count(0, counter[j], j);
                  };
});
var nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var scrolltop = $(this).scrollTop();

  $('section').each(function() {

    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (scrolltop >= top-1 && scrolltop <= bottom) {
      nav.find('a').removeClass('active');      
     
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
  
    
});

          
     


nav.find('a').on('click', function () {
  var id = $(this).attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 800);
  
  return false;
});
$(window).bind('beforeunload', function (e) {
        $("html,body").animate({scrollTop:'0'},0);
        
});




