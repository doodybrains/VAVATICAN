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
});