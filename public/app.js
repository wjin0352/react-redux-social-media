$(document).ready(function(){
  $(".what").click(function(){
    console.log(this)
    $(".overlay").fadeIn(1000);
  });

  $(".close").click(function(){
    $(".overlay").fadeOut(1000);
  });
});
