$(document).ready(function() {

  $(".what").click(function(){
    $("div.overlay").fadeIn(1000);
  });

  $("a.close").click(function(){
    $("div.overlay").fadeOut(1000);
  });

// window.onload = function() {
//   console.log('ready');
//
//   const what = document.getElementById('what');
//   const modal = document.getElementById('modal')
//   const close = document.getElementById('close');
//
//   document.getElementById('what').on('click', function() {
//     document.getElementById('modal').fadeIn(1000);
//   });
//
//   document.getElementById('close').on('click', function() {
//     document.getElementById('modal').fadeOut(1000);
//   });
// }

});
