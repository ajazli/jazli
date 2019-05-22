$(document).ready(function(){
$('.aesthetics').waypoint(function(direction) {
    if (direction == 'down'){
        $('.aesthetics').addClass('js-aes-anim');
    } else {
        $('.aesthetics').addClass('js-fade-anim');
        $('.aesthetics').removeClass('js-aes-anim');
    }
    });
});