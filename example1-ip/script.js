/* global $ Mustache */

$(document).ready(function(){
    
    $('button').on('click', function(){
        var ip = $('input').val();
        $.get('https://freegeoip.net/json/' + ip , function(resp) {
            var pattern = $('#tmpResults').html();
            var content = Mustache.render(pattern,resp);
            $('#divResults').html(content);
        });
        
    });
    
});