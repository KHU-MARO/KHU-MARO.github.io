$(document).ready(function(){
  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 400) {
      $("header").css('background-color', 'black');
    } else {
      $("header").css('background-color', '');
    }
  });

  $(".page-scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});

