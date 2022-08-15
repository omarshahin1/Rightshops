
$(document).ready(function() {
var defaultColour = 'orange';
  
  if ($('.switcher a.background').size() > 0) {
    var bgActive = $('#background-wrapper').attr('class');
    $('.switcher a.background').removeClass('active');
    $('.switcher a.'+ bgActive).addClass('active');
  }
  
  //background & colour switch
  $('.switcher a').click(function() {
    var c = $(this).attr('href').replace('#','');
    
    //colours
    if ($(this).hasClass('colour')) {
      if (c != defaultColour) {
        $('#colour-scheme').attr('href','css/colour-'+ c +'.css');
      }
      else {
        $('#colour-scheme').attr('href', '#');
      }
      
      $('.switcher a.colour').removeClass('active');
    }
    
    if ($(this).hasClass('background')) {
      $('#background-wrapper').removeClass();
      $('#background-wrapper').addClass(c);
      $('.switcher a.background').removeClass('active');
    }
    
    $('.switcher a.'+ c).addClass('active');
  });
  
});