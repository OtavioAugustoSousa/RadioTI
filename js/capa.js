
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
        triggerElement:'header',
        duration: 0,  // the scene should last for a scroll distance of 100px
        offset: 500      // start this scene after scrolling for 50px
    })
    .setTween('.capa', 2, {overflow:'hidden',height:200, ease:SlowMo.easeOut}) // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
$('.btn-scroll, .scroll').on('click', function(){
  $('html, body').animate({
       scrollTop: $("#about").offset().top - 450
   }, 2000);
});

$('.glyphicon-play').each(function(){
  var myaudio = new Audio($(this).data('audio'));
  $(this).on('click',function(){
    if($(this).hasClass('glyphicon-play')){
      $(this).addClass('glyphicon-pause');
      $(this).removeClass('glyphicon-play');
      myaudio.play();
    }else{
      $(this).addClass('glyphicon-play');
      $(this).removeClass('glyphicon-pause');
      myaudio.pause();
    }

  });
});
