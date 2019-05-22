$(document).ready(function() {

    if (document.cookie.split('=')[1] == null){ 
   
        document.cookie = ("mode=dark");
    }
    if (document.cookie.split('=')[1] == 'dark'){ 
        $('.mode i').removeClass('moon');  
        $('.mode i').addClass('sun');   
    }
    else if (document.cookie.split('=')[1] == 'light'){ 
        $('.mode i').removeClass('sun'); 
        $('.mode i').addClass('moon');
            
    }
});

$(document).ready(function() {

    $(".home").click(function() {
     $('html, body').animate({
         scrollTop: $("body").offset().top
     }, 1000); return false;
 });
    
$(".about").click(function() {
     $('html, body').animate({
         scrollTop: $(".aboutContent").offset().top
     }, 1000); return false;
 });



$(".philosophy").click(function() {
     $('html, body').animate({
         scrollTop: $(".philosophyContent").offset().top
     }, 1000); return false;
 });

    $(".whatido").click(function() {
     $('html, body').animate({
         scrollTop: $(".whatidoContent").offset().top
     }, 1000); return false;
 });
    
    $(".contact").click(function() {
     $('html, body').animate({
         scrollTop: $(".contactContent").offset().top
     }, 1000); return false;
 });
    
});


$(document).ready(function() {
$('.aesthetics').waypoint(function(direction) {
    if (direction == 'down'){
        $('.aesthetics').addClass('js-aes-anim');
        $('.aesthetics').addClass('js-out-anim');
    } else {
        $('.aesthetics').removeClass('js-aes-anim');
    }
}, { offset: '100%' });
});
    
$(document).ready(function() {
$('.functionality').waypoint(function(direction) {
    if (direction == 'down'){
        $('.functionality').addClass('js-funct-anim');
    } else {
        $('.functionality').removeClass('js-funct-anim');
    }
}, { offset: '100%' });
});

$(document).ready(function() {
$('.experience').waypoint(function(direction) {
    if (direction == 'down'){
        $('.experience').addClass('js-exp-anim');
    } else {
        $('.experience').removeClass('js-exp-anim');
    }
}, { offset: '100%' });
});
    
$(document).ready(function() {
$('.philosophyDesc').waypoint(function(direction) {
    if (direction == 'down'){
        $('.philosophyDesc').addClass('js-pd-anim');
    } else {
        $('.philosophyDesc').removeClass('js-pd-anim');
    }
}, { offset: '100%' });
});
    

$(document).ready(function() {
    var mode = document.getElementsByClassName('mode');
    var html = document.html;
    document.documentElement.setAttribute('class', document.cookie.split('=')[1])
        
    $(".mode").click(function() {
        if (document.cookie.split('=')[1] == 'dark'){ 
            document.cookie = "mode=light";
            $('.mode i').removeClass('sun');    
            $('.mode i').addClass('moon');    
            document.documentElement.setAttribute('class', document.cookie.split('=')[1]);
            document.getElementById('home').style.position="fixed";
            
        }
        else if (document.cookie.split('=')[1] == 'light'){ 
            document.cookie = "mode=dark";
            $('.mode i').removeClass('moon');
        $('.mode i').addClass('sun'); 
            document.documentElement.setAttribute('class', document.cookie.split('=')[1]);
            
            }
    });
    
 });


$(document).ready(function() {
        
        $('.bars').click(function() {
                if($(window).width() < 1024){
                    if($('nav').css('opacity') == 0){
                        $('nav').removeClass('js-nav-out-anim');
                        $('nav').addClass('js-nav-in-anim');
                    }
                else{
                    $('nav').removeClass('js-nav-in-anim');
                    $('nav').addClass('js-nav-out-anim');
                }
            }
        });

        $('nav').click(function() {
            if($(window).width() < 1024){
                $('nav').removeClass('js-nav-in-anim');
                    $('nav').addClass('js-nav-out-anim');
            }
        });

            $('nav li a').click(function() {
                if($(window).width() < 1024){
                    $('nav').removeClass('js-nav-in-anim');
                    $('nav').addClass('js-nav-out-anim');
                }
            });
    
 });


