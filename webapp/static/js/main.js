$(function() {
    $('#subscribe').on('click', function(){
       console.log('sending');
       alert("Thank you for subscribing, you'll be the first to know when we're open!")
       $('#input-email').val('');
    })
});
