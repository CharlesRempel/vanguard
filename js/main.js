/*$( document ).ready(function() {
   getElementById('caseStudy').style.width(Math.random).height(Math.random);
});*/

$(function() {
    $('#cowboy section#work h2#hidden').click(function(e) {
        e.preventDefault();
        $('#caseStudy').toggleClass('display');
        $('#start').removeClass('display');
        $('#staff').removeClass('display');
        $('#contact').removeClass('display');
    });
});

$(function() {
    $('#cowboy section#process h2#hidden').click(function(e) {
        e.preventDefault();
        $('#start').toggleClass('display');
        $('#caseStudy').removeClass('display');
        $('#staff').removeClass('display');
        $('#contact').removeClass('display');
    });
});

$(function() {
    $('#cowboy section#team h2#hidden').click(function(e) {
        e.preventDefault();
        $('#staff').toggleClass('display');
        $('#caseStudy').removeClass('display');
        $('#start').removeClass('display');
        $('#contact').removeClass('display');
    });
});

$(function() {
    $('#cowboy section#hire h2#hidden').click(function(e) {
        e.preventDefault();
        $('#contact').toggleClass('display');
        $('#caseStudy').removeClass('display');
        $('#start').removeClass('display');
        $('#staff').removeClass('display');
    });
});
