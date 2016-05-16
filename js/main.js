/*$( document ).ready(function() {
   getElementById('caseStudy').style.width(Math.random).height(Math.random);
});*/

$(function() {
    $('#cowboy section h2#hidden').click(function(e) {
        e.preventDefault();
        $('#caseStudy').toggleClass('display');
    });
});

$(function() {

  var image = document.getElementById("img");

  $('#affirmingAnimals .aa').onMouseIN(function(e) {
      e.preventDefault();
      $(image).toggleClass('workbuttons');
  });
});
