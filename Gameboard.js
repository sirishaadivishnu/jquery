// Gameboard program to create scoreboard that displays NBA scores from around the league. They want the user to be able to click the More link to see the dropdown menu, to click the Share link to see the share menu, and to click the notification bell
// Author: Sirisha Adivishnu
var main = function() {
    $('.more-btn').on('click', (event) => {
      $(event.currentTarget).siblings('.more-menu').toggle();
    });
    $('.share').on('click', (event) => {
      $(event.currentTarget).next().toggle();
    });
    $('.notification').on('click', (event) => {
      
  $(event.currentTarget).toggleClass('active');
    })
    
  
  };
  
  $(document).ready(main);
  