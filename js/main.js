'use strict'

CountDownTimer('12/09/2020', 'introright__count');
function CountDownTimer(dt, id) {
  var end = new Date(dt);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
      var now = new Date();
      var distance = end - now;

      // 시간 종료 시 뜨는 문구
      if (distance < 0) {
          clearInterval(timer);
          document.getElementById(id).innerHTML = '카운트다운이 끝났습니다. 곧 오픈합니다!';
          return;

      }

      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById(id).innerHTML= +days+"<span style=font-weight:400;font-size:20px;>days </span>"
      +hours+"<span style=font-weight:400;font-size:20px;>hours </span>"
      +minutes+"<span style=font-weight:400;font-size:20px;>minutes </span>"
      +seconds+"<span style=font-weight:400;font-size:20px;>seconds</span>";
      

      // document.getElementById(id).innerHTML = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`
  }
  timer = setInterval(showRemaining, 1000);
}

$('.responsive').slick({
  dots: true,
  infinite: false,
  // autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
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
      breakpoint: 600,
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