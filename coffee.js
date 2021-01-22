$(document).ready(function () {
    $(window).scroll(function () { 

             /* nav bar */

        if (scrollY > 20 ) {
            $('.navbar').css({
                backgroundColor: 'rgb(216 179 134)',
                borderRadius: '0px 0px 15px 15px'
            });
            $('.nav-link').css('color', 'rgb(86 41 13)');
            $('[title="logo"]').css('width','60px')
        }else {
            $('.navbar').css('backgroundColor', 'transparent');
            $('.nav-link').css('color', '#5a4851');
            $('[title="logo"]').css('width','80px');
            $('.navbar-toggler-icon').click(function () { 
                $('.navbar-collapse').css({
                    backgroundColor: 'rgb(216, 179, 134)',
                    borderRadius: '0px 0px 15px 15px'
                });
                $('.nav-link').css({
                    color: 'rgb(86, 41, 13)',
                    padding: '10px'
                });
                
            });
        }

        


    });


    /* navigation buttons */

        $('[title="home"]').click(function () { 
           $(window).scrollTop(0);
        });
        
      
        $('[title="about"]').click(function () { 
           $(window).scrollTop(450);
        });
        
        $('[title="products"]').click(function () { 
           $(window).scrollTop(950);
        });
        $('[title="contact-us"]').click(function () { 
           $(window).scrollTop(2150);
        });

   
        /* images motion */
    
    document.addEventListener('mousemove', move);
    
    function move (e) {
        this.querySelectorAll('.move').forEach(layer => {
            var speed = layer.getAttribute('data-speed')
            var x =(window.innerWidth - speed * e.pageX)/120
            var y = (window.innerHeight - speed * e.pageY)/80
    
            layer.style.transform = `translateX(${x}px)  translateY(${y}px)`
          
        })
    }
                 /* scroll */

    $('.products1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.products2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: $('.next1'),
        prevArrow: $('.prev1'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.products3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: $('.next2'),
        prevArrow: $('.prev2'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });


         /* zooming boxes  */
    
    $('.box').click(function (e) { 
      $(this ,'img').toggleClass('zoom');
    });
    
    $('.box').on('mouseleave', function () {
      $(this ,'img').removeClass('zoom');
    });

             /*Pop Ups */

             /*Feedback */
    $('.feedback').on('click', function () {
      $('#feedback').addClass('appear');
      $('section').css('filter', 'blur(3px)');
    });
    $('.close').click(function () { 
     $('#feedback').removeClass('appear');
     $('section').css('filter', 'blur(0px)');
    });

            /*Feedback */

            /*Idea*/
    $('.idea').click(function () { 
      $('#idea').addClass('appear');
      $('section').css('filter', 'blur(3px)');
    });
    $('.close').click(function () { 
      $('#idea').removeClass('appear');
      $('section').css('filter', 'blur(0px)');
     });
            /*Idea*/

            /*Hot Menue*/
    $('[title="hot-menue"]').mouseover(function () { 
      $('.hot-menue').animate({
        left: '0px'
      },1000)
    });

    $('.hot-menue').mouseleave(function () { 
      $('.hot-menue').animate({
        left: '-125px'
      },1000)
    });

    $('.hot-menue').click(function () { 
      $('#hot-menue').addClass('appear');
      $('#cold-menue').removeClass('appear');
      $('#bakery-menue').removeClass('appear');
      $('section').css('filter', 'blur(3px)');
    });

    $('.close').click(function (e) { 
      $('#hot-menue').removeClass('appear');
      $('section').css('filter', 'blur(0px)');
      
    });

                /*Hot Menue*/

           /* Cold menue*/

      $('[title="cold-menue"]').mouseover(function () { 
        $('.cold-menue').animate({
          left: '0px'
        },1000)
      });
  
      $('.cold-menue').mouseleave(function () { 
        $('.cold-menue').animate({
          left: '-135px'
        },1000)
      });
  
      $('.cold-menue').click(function () { 
        $('#cold-menue').addClass('appear');
        $('#hot-menue').removeClass('appear');
        $('#bakery-menue').removeClass('appear');
        $('section').css('filter', 'blur(3px)');
      });
  
      $('.close').click(function (e) { 
        $('#cold-menue').removeClass('appear');
        $('section').css('filter', 'blur(0px)');
        
      });

                 /* Cold menue*/

      /*Bakery Menue */

      $('[title="bakery-menue"]').mouseover(function () { 
        $('.bakery-menue').animate({
          left: '0px'
        },1000)
      });
  
      $('.bakery-menue').mouseleave(function () { 
        $('.bakery-menue').animate({
          left: '-155px'
        },1000)
      });
  
      $('.bakery-menue').click(function () { 
        $('#bakery-menue').addClass('appear');
        $('#cold-menue').removeClass('appear');
        $('#hot-menue').removeClass('appear');
        $('section').css('filter', 'blur(3px)');
      });
  
      $('.close').click(function (e) { 
        $('#bakery-menue').removeClass('appear');
        $('section').css('filter', 'blur(0px)');
        
      });

            /*Bakery Menue */
    
});
