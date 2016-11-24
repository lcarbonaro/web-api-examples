/* global $ Mustache */

$(document).ready(function(){
    
    $('button').on('click', function(){
        var cards = $('input').val();
        $.get('http://deckofcardsapi.com/api/deck/new/draw/?count=' + cards , function(resp) {
            var pattern = $('#tmpResults').html();
            var content = Mustache.render(pattern,resp);
            $('#divResults').html(content);
        });
        
    });
    
});