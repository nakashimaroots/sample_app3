$(function(){
    $('#micropost_content').bind('keyup',function(){
        var thisValueLength = $(this).val().replace(/\n|\r\n/g,"aa").length;
        $('#count_up').html(140-thisValueLength);
        if(thisValueLength == 0 ){
        	$('#count_up').html("140");
        }
    });
});
