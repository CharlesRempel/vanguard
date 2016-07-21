/*$( document ).ready(function() {
   getElementById('caseStudy').style.width(Math.random).height(Math.random);
});*/

//Toggleing the hidden or block state of each tab

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


//Nav bar opening selected tabs

$(function() {
    $('#t').click(function(e) {
        e.preventDefault();
        $('#staff').toggleClass('display');
        $('#caseStudy').removeClass('display');
        $('#start').removeClass('display');
        $('#contact').removeClass('display');
    });
});

$(function() {
    $('#h').click(function(e) {
        e.preventDefault();
        $('#contact').toggleClass('display');
        $('#caseStudy').removeClass('display');
        $('#start').removeClass('display');
        $('#staff').removeClass('display');
    });
});

$(function() {
    $('#w').click(function(e) {
        e.preventDefault();
        $('#caseStudy').toggleClass('display');
        $('#start').removeClass('display');
        $('#staff').removeClass('display');
        $('#contact').removeClass('display');
    });
});


//Change Label colour on mousein/mouseout
// 
// $(function() if{
//     $('#cowboy section#hire').mouseover(function(e) {
//         e.preventDefault();
//       $('label').addClass('labelchange');
//     })
//   }
//     else {
//       $('#cowboy section#hire').mouseout(function(e) {
//           e.preventDefault();
//         $('label').addClass('labeldefault');
//     })
// });
