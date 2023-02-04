// Course : WEBD6201
// STUDENT NUMBER : 100844220
// NAME: Eugene (Hongju) Shin
// Date: 03 Feb 2023 


function fadeInOutTo() {
    //fade out - display: none;
    $('.red-box').fadeOut(3000);
    //fade in - display: block;
    $('.red-box').fadeIn(1500);
    //fade to an opacity - display: none;
    $('.green-box').fadeTo(2000, .3);
    //fade to half opacity
    $('.blue-box').fade(1000, .5);
    // toggle display
    $('.blue-box').fadeToggle();
    // toggle display (went to block, but remember to)
    $('.blue-box').fadeToggle();
}

function hideElement(){
    $('.red-box').hide(1000);
    $('.green-box').show(200);
    $('.green-box').slideUp(2000);
    $('.green-box').slideDown(2000);
    $('.green-box').slideToggle(2000);
}

function chainAnimation(){
    $('.red-box').fadeTo(1000, .5);
    $('.red-box').delay(1000).fadeTo(1000, .5);
    // chaining even more function calls to create animations
    $('.blue-box').delay(2000).fadeTo(1000,.5).fadeTo(1000,.5).delay(1000).fadeOut();

    $('.red-box').fadeTo(1000, 0, function(){
        $('.green-box').fadeTo(1000, 0, function(){
            $('.blue-box').fadeTo(1000, 0); 
        });
    });
}

chainAnimation();
//hideElement();
//fadeInOutTo();