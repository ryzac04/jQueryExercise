$(function () {
  console.log("Let's get ready to party with jQuery!");
});

$('img').addClass('image-center');

$('p').eq(5).remove();

$('h1').css('font-size', function () {
  return Math.floor((Math.random() * 100) + 1);
});

$('li').last().append('<li>whatever you want.</li>');

$('aside').empty().append('<p>Apologies for the list</p>');

$('.form-control').on('keyup change', function () {
  let red = $('.form-control').eq(0).val();
  let blue = $('.form-control').eq(1).val();
  let green = $('.form-control').eq(2).val();
  $('body').css('background-color','rgb(' + red + ',' + green + ',' + blue +')')
});

$('img').on('click', function () {
  $(this).remove();
});