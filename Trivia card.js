// Trivia card program 
// Author: Sirisha Adivishnu
$(document).ready(() => {
  // click events
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(800);
  });
  
  $('wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('slow');
    $('.frown').show();
  });

  $('wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut('fast');
    $('.frown').show();
  });

  $('wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut();
    $('.frown').show();
  });

  $('.correct-answer').on('click', () => {
    $('.from').hide();
    $('.smiley').show();
    $('.wrong-answer-one').fadeOut('slow');
    $('.wrong-answer-two').fadeOut('slow');
    $('.wrong-answer-three').fadeOut('slow');
  });
});



  


  
  
    
  
  