/*$( document ).ready(function() {
   getElementById('caseStudy').style.width(Math.random).height(Math.random);
});*/

//Toggleing the hidden or block state of each tab

$(function() {
    $('#cowboy section#work h2#hidden').click(function(e) {
        e.preventDefault();
        $('#caseStudy').toggleClass('display');
        $('#staff').removeClass('display');
        $('#contact').removeClass('display');
    });
});

$(function() {
    $('#cowboy section#team h2#hidden').click(function(e) {
        e.preventDefault();
        $('#staff').toggleClass('display');
        $('#caseStudy').removeClass('display');
        $('#contact').removeClass('display');
    });
});

$(function() {
    $('#cowboy section#hire h2#hidden').click(function(e) {
        e.preventDefault();
        $('#contact').toggleClass('display');
        $('#caseStudy').removeClass('display');
        $('#staff').removeClass('display');
    });
});


//Nav bar opening selected tabs
