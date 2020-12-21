$(document).ready(function () {
  "use strict";

  // $('.prog-sidebar').scroll(()=>{
  //   if($('.prog-sidebar').scrollTop() > 5){
  //     $('#floating').css('opacity', '0.8');
  //   }else{
  //     $('#floating').css('opacity', '0');
  //   }
  // })


  $("#floating-bottom").click(() => {
    // $(".prog-sidebar").animate({ scrollTop: $('.prog-sidebar').height() }, 50);
    // $("#floating-top").css("display", "block");
    // $("#floating-bottom").css("display", "none");

    var vheight = $('.prog-sidebar').height();
    $('.prog-sidebar').animate({scrollTop: (Math.floor($('.prog-sidebar').scrollTop() / vheight)+100) * vheight}, 500); 
    $("#floating-top").css("display", "block");
    $("#floating-bottom").css("display", "none"); 

  });

  $("#floating-top").click(() => {
    $(".prog-sidebar").animate({ scrollTop: 0 }, 50);
    $("#floating-bottom").css("display", "block");
    $("#floating-top").css("display", "none");
  });

  // $(".fixed-date").on("inview", function (event, isInView) {
  //   if (isInView) {
  //     console.log("div is in view");
  //   } else {
  //     console.log("div is not in view");
  //   }
  // });

  // $(".date-divider").map(function (index, item) {
  //   $(item).on("inview", function (event, isInView) {
  //     if (isInView) {
  //       // console.log("div is in view");
  //       $(".fixed-date").fadeOut(1000);
  //     } else {
  //       $(".fixed-date").fadeIn("fast");
  //     }
  //   });
  // });

  // $('.date-divider').not(".date_divider_template").addClass("slack-date-divider");

  if($('.date-divider').length){
    $('.fixed-date').css('display', 'block');
  }else{
    $('.fixed-date').css('display', 'none');
  }

  $('.chat-body').on('scroll', function(){
    if(Math.floor($(".fixed-date").offset().top) <= $('.loadMore').offset().top){
      $('.fixed-date').css('display', 'none');
    }else{
      $('.fixed-date').css('display', 'block')
    }
    // console.log($('.loadMore').offset().top);
    // console.log(Math.floor($('.fixed-date').offset().top));
  })

  console.log($('.date-divider').last().offset().top)
  $(".chat-body").on('scroll',function () {
    $(".date-divider").map(function (index, item) {
      if ($(".fixed-date").offset().top >= $(item).offset().top) {
        $(".fixed-date").text($(item).text());  
      }
    });
  });


});
