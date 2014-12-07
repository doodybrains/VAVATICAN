$( document ).ready(function() {
    $(".button-close").hide();
    $(".button").click(function(){
      $(".button, .button2, .butt").hide();
      $(".button-close").show();
      $(".menu-box").show();
    });
    $(".button-close").click(function(){
      $(".button-close").hide();
      $(".button, .butt").show();
      $(".menu-box").hide();
    });

     $(".button-close").hide();
      $(".button2").click(function(){
      $(".button2, .button, .butt").hide();
      $(".button-close").show();
      $(".menu-box2").show();
    });
    $(".button-close").click(function(){
      $(".button-close").hide();
      $(".button2, .butt").show();
      $(".menu-box2").hide();
    });
});