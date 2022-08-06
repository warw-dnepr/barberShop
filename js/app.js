
//////header/////////////////////


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.querySelector(".logo1").style.display = "none";
      document.querySelector(".logo2").style.width = 90 + "px";
      document.querySelector(".logo2").style.marginTop = 40 + "px";
      document.querySelector(".main-block").style.marginTop = -50 + "px";
      document.querySelector(".main-block").style.maxWidth = 700 + 'px';
      document.querySelector(".btn-reserv-a").style.backgroundColor = 'background: rgba(239, 201, 45, 0.54);';
   } else {
      document.querySelector(".logo1").style.display = "block";
      document.querySelector(".logo2").style.width = 120 + "px";
      document.querySelector(".logo2").style.marginTop = 0 + "px";
      document.querySelector(".main-block").style.marginTop = 0 + "px";
      document.querySelector(".main-block").style.maxWidth = 900 + 'px';
      document.querySelector(".btn-reserv-a").style.backgroundColor = 'antiquewhite';

   }
}


$(function () {
   $('.img-1').mouseover(function () {
      $('.block-1').css('opacity', 1).css('transition', '.6s')
   })
   $('.img-1').mouseout(function () {
      $('.block-1').css('opacity', .3).css('transition', '.6s')
   })

   $('.img-2').mouseover(function () {
      $('.block-2').css('opacity', 1).css('transition', '.6s')
   })
   $('.img-2').mouseout(function () {
      $('.block-2').css('opacity', .3).css('transition', '.6s')
   })

   $('.img-3').mouseover(function () {
      $('.block-3').css('opacity', 1).css('transition', '.6s')
   })
   $('.img-3').mouseout(function () {
      $('.block-3').css('opacity', .3).css('transition', '.6s')
   })
})
//////////////////////////SERVICES/////////////////////////////////////
// $(function () {
//    $('.top-barber').click(function () {
//       $('.barber-top-list').css('display', 'flex');
//       $('.barber-list').css('display', 'none');
//       $('.top-barber').css('background', 'orange').css('color', 'black').css('font-weight', 'bold');
//       $('.barber').css('background', 'rgba(239, 201, 45, 0.542)').css('color', 'antiquewhite').css('font-weight', 'normal')
//    })
// })
// $(function () {
//    $('.barber').click(function () {
//       $('.barber-list').css('display', 'flex')
//       $('.barber-top-list').css('display', 'none')
//       $('.barber').css('background', 'orange').css('color', 'black').css('font-weight', 'bold')
//       $('.top-barber').css('background', 'rgba(239, 201, 45, 0.542)').css('color', 'antiquewhite').css('font-weight', 'normal')

//    })
// })

$(function(){
   $('.item-1').mouseover(function(){
      $('.inform-1').show()
   })
   $('.item-1').mouseout(function(){
      $('.inform-1').hide()
   })
   $('.item-2').mouseover(function(){
      $('.inform-2').show()
   })
   $('.item-2').mouseout(function(){
      $('.inform-2').hide()
   })
})


$(function () {


   
   $('#price-1').mouseover(function () {
      $('.price-info').addClass('right-window')
      $('.price-info').show()
      $('.ul-1').show()
   })
   $('#price-1').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').hide()
      $('.ul-1').hide()
   })
   $('#price-2').mouseover(function () {
      $('.price-info').addClass('right-window')
      $('.price-info').css('display', 'block')
      $('.ul-2').css('display', 'block')
   })
   $('#price-2').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-2').css('display', 'none')
   })
   $('#price-3').mouseover(function () {
      $('.price-info').addClass('right-window')
      $('.price-info').css('display', 'block')
      $('.ul-3').css('display', 'block')
   })
   $('#price-3').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-3').css('display', 'none')
   })
   $('#price-4').mouseover(function () {
      $('.price-info').addClass('right-window')
      $('.price-info').css('display', 'block')
      $('.ul-4').css('display', 'block')
   })
   $('#price-4').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-4').css('display', 'none')
   })
   $('#price-5').mouseover(function () {
      $('.price-info').addClass('right-window')
      $('.price-info').css('display', 'block')
      $('.ul-5').css('display', 'block')
   })
   $('#price-5').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-5').css('display', 'none')
   })
   $('#price-6').mouseover(function () {
      $('.price-info').addClass('right-window')
      $('.price-info').css('display', 'block')
      $('.ul-6').css('display', 'block')
   })
   $('#price-6').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-6').css('display', 'none')
   })
   $('#price-7').mouseover(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').addClass('left-window')
      $('.price-info').css('display', 'block')
      $('.ul-7').css('display', 'block')
   })
   $('#price-7').mouseout(function () {
      $('.price-info').css('display', 'none')
      $('.ul-7').css('display', 'none')
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
   })
   $('#price-8').mouseover(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').addClass('left-window')
      $('.price-info').css('display', 'block')
      $('.ul-8').css('display', 'block')
   })
   $('#price-8').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-8').css('display', 'none')
   })
   $('#price-9').mouseover(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').addClass('left-window')
      $('.price-info').css('display', 'block')
      $('.ul-9').css('display', 'block')
   })
   $('#price-9').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-9').css('display', 'none')
   })
   $('#price-10').mouseover(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').addClass('left-window')
      $('.price-info').css('display', 'block')
      $('.ul-10').css('display', 'block')
   })
   $('#price-10').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-10').css('display', 'none')
   })
   $('#price-11').mouseover(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').addClass('left-window')
      $('.price-info').css('display', 'block')
      $('.ul-11').css('display', 'block')
   })
   $('#price-11').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-11').css('display', 'none')
   })
   $('#price-12').mouseover(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').addClass('left-window')
      $('.price-info').css('display', 'block')
      $('.ul-12').css('display', 'block')
   })
   $('#price-12').mouseout(function () {
      $('.price-info').removeClass('right-window')
      $('.price-info').removeClass('left-window')
      $('.price-info').css('display', 'none')
      $('.ul-12').css('display', 'none')
   })

})
/////////////////////masters////////////////////////

///////////carusel////
$(function () {
   $('.swiper-wrapper').slick({
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 2,
      autoplay: true,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      arrows: true,
      prevArrow: '<span class="arrow-left"><i class="fa-solid fa-circle-chevron-left"></i></span>',
      nextArrow: '<span class="arror-right"><i class="fa-solid fa-circle-chevron-right"></i></span>',
      responsive: [
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 1
            }
         }
      ]
   });
});

$(function () {
   $('.swiper-slide').mouseover(function () {
      $(this).children('.a-master').css('box-shadow', '0 0 4px 4px orange')
   })
   $('.sec-masters').mouseout(function () {
      $('.a-master').css('box-shadow', 'none')

   })

})


/////////////////////////gift-certificate

$(function () {
   $('#imgGift,.gift-text').mouseover(function () {
      $('.gift-btn').css('box-shadow', '0 0 4px 4px orange')
   })
   $('#imgGift,.gift-text').mouseout(function () {
      $('.gift-text').css('background', 'none')
      $('.gift-text').css('box-shadow', 'none')
      $('.gift-btn').css('box-shadow', 'none')
   })
})
/////////////////////////gallery
$('.carusel-1').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 768,
         settings: {
            centerPadding: '115px',
            arrows: false,
            centerMode: true,
            slidesToShow: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            centerPadding: '20px',
            arrows: false,
            centerMode: true,
            slidesToShow: 1
         }
      }
   ]
});
$('.carusel-2').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 768,
         settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '115px',
            slidesToShow: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
         }
      }
   ]
});
/////////////contact
let request;
if (window.XMLHttpRequest) {
   request = new XMLHttpRequest();
} else {
   request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&lang=en&appid=9fbaef1980ec0e5dd28c355a2f56449a");

request.onload = function () {

   if (request.status === 200) {

      //parse////////
      ourWeather = JSON.parse(request.response);
      city.innerText = ourWeather.name
      // + ' - ' +ourWeather.sys.country;
      console.log(ourWeather.name)

      let iconImg = 'http://openweathermap.org/img/wn/' + ourWeather.weather[0].icon + '@2x.png';
      mainIcon.src = iconImg;

      temp.innerHTML = ourWeather.main.temp.toFixed(0) + "<span><sup>o</sup><span>c</span>";

   }
}
request.send()


