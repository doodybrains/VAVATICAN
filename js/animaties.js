$( document ).ready(function() {
  $('.open').click(function() {
    console.log('hello');
    $('.menu').toggleClass('active');
  });
});