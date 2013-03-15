$(function() {
    $('#subscribe').on('click', function(){
       console.log('sending');
       $.post('/api/subscribers', {'email':$('#input-email').val()}, function(){alert("Thank you for subscribing, you'll be the first to know when we're open!");$('#input-email').val('');})
       console.log('done sending');

    })
    var deck = new $.scrolldeck({
        slides: '.slide',
        buttons: '.nav a',
        easing: 'easeInOutExpo'
    });

    Galleria.loadTheme('static/lib/galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('#galleria');

});
