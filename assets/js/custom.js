$(document).ready(function () {
  "use strict";

  // $('.prog-sidebar').scroll(()=>{
  //   if($('.prog-sidebar').scrollTop() > 5){
  //     $('#floating').css('opacity', '0.8');
  //   }else{
  //     $('#floating').css('opacity', '0');
  //   }
  // })


  $('#floating-bottom').click(()=>{
    $('.prog-sidebar').animate({ scrollTop: $('.prog-sidebar').height() }, 50);
    $('#floating-top').css('display', 'block');
    $('#floating-bottom').css('display', 'none');
  })

  $('#floating-top').click(()=>{
    $('.prog-sidebar').animate({ scrollTop: 0 }, 50);
    $('#floating-bottom').css('display', 'block');
    $('#floating-top').css('display', 'none');
  })


  // console.log($('.date-divider').last().offset().top)
  $('.chat-body').scroll(function(){
    $('.date-divider').map(function(index, item){
      // console.log($(item).offset().top)
      if($('.fixed-date').offset().top >= $(item).offset().top){
        // console.log("true");
        // console.log($(item).text());
        $('.fixed-date').text($(item).text());
      }else{
        // console.log("false")
      }
    })
  })
});
