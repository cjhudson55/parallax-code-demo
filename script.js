// whenever scroll want to logout how much my scroll position is

// the window is triggering the event. looking for scroll top and logging this out
$(window).scroll(function() {
    let winScroll = $(this).scrollTop();
        console.log(winScroll);

        $('.bg').css({
            'transform': 'translate(0, '+ winScroll/8 + '%)'
        })
        
        $('.bg2').css({
            'transform': 'translate(0, '+ winScroll/12 + '%)'
        })
        
        $('.bg3').css({
            'transform': 'translate(0, '+ winScroll/18 + '%)'
        })
        
        $('.bg4').css({
            'transform': 'translate(0, '+ winScroll/26 + '%)'
        })
        
        $('.bg5').css({
            'transform': 'translate(0, '+ winScroll/36 + '%)'
        })
        
    })