$( document ).ready(function() {
    $(".button-close").hide();
    $(".button").click(function(){
      $(".button").hide();
      $(".button-close").show();
      $(".menu-box").show();
    });
    $(".button-close").click(function(){
      $(".button-close").hide();
      $(".button").show();
      $(".menu-box").hide();
    });

     $(".button-close-2").hide();
      $(".button-2").click(function(){
      $(".button-2").hide();
      $(".button-close-2").show();
      $(".menu-box-2").show();
    });
    $(".button-close-2").click(function(){
      $(".button-close-2").hide();
      $(".button-2").show();
      $(".menu-box-2").hide();
    });
});