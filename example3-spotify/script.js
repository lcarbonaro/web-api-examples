/* global $ Mustache */

$(document).ready(function(){
    
    $('button').on('click', function(){
        var name = $('input').val();
        $.get('https://api.spotify.com/v1/search?q=' + name + '&type=album' , function(resp) {
            var pattern = $('#tmpResults').html();
            var content = Mustache.render(pattern,resp);
            $('#divResults').html(content);
        });
    });
    
});