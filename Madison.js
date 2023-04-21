// A program to appear menu when a user clicks on a specific menu header and disappears when the user's mouse exists the menu
// Author: Sirisha Adivishnu
$(document).ready(() => {
    $('#cart').on('click', () => {
      $('#cartMenu').show();
    });
    $('#account').on('click', () => {
      $('#accountMenu').show();
    });
    $('#help').on('click', () => {
      $('#helpMenu').show();
    });
  
     $('.dropdown-menu').on('mouseleave', () => {
      $('.dropdown-menu').hide();
     });
    
  })