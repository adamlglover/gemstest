//= require jquery.min
//= require skel.min
//= require init
//= require jquery.poptrox.min
//= require jquery.scrolly.min
//= require jquery.scrollex.min
$('.for_toogle').click(function(){
  $(this).parents('#menu').find('.custome_nav ul').toggle('.open');
});
