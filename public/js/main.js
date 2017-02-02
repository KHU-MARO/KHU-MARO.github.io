$(document).ready(function(){
  var scroll_pos = 0;
  var about_pos = $("#about").offset().top;
  var project_pos = $("#project").offset().top;
  var contact_pos = $("#contact").offset().top;

  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos >= about_pos && scroll_pos < project_pos) {
      $("header").css('background-color', 'rgba(0, 0, 0, 0.8)');
      $(".page-scroll").css('color', '#ffffff');
      $("#aboutBtn").css('color', '#5f62ff');
    }
    else if(scroll_pos >= project_pos && scroll_pos < contact_pos) {
      console.log("project");
      $("header").css('background-color', 'rgba(0, 0, 0, 0.8)');
      $(".page-scroll").css('color', '#ffffff');
      $("#projectBtn").css('color', '#5f62ff');
    }
    else if(scroll_pos >= contact_pos) {
      $("header").css('background-color', 'rgba(0, 0, 0, 0.8)');
      $(".page-scroll").css('color', '#ffffff');
      $("#contactBtn").css('color', '#5f62ff');
    }
    else {
      $("header").css('background-color', '');
      $(".page-scroll").css('color', '#ffffff');
    }
  });

  $(".page-scroll").click(function(event){
    event.preventDefault();
    $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    // $(".page-scroll").css('color', '#ffffff');
    // $(this).css('color', '#5f62ff');
  });
});

