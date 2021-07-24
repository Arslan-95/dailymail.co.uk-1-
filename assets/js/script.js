$('document').ready(() => {
    // DROPDOWN MENU
    var menuOpen = false;
    $('.open_mobile_menu').click(() => {
        if(menuOpen == false){
            $('.overlay_screen').css({'display': 'block'})
            setTimeout(()=> {
                $('.container > *').addClass('open_the_menu')
            },1)
            $('body').css({'overflow-y': 'hidden'})
            menuOpen = true;
        }else{
            $('.overlay_screen').css({'display': 'none'})
            $('.container > *').removeClass('open_the_menu')
            $('body').css({'overflow-y': 'scroll'})
            menuOpen = false;
        }
    })
    // Dropdown menu tags
    $('header nav ul li span.for_mobile').click(function(e) {
        let nextItem = $(this).parent().next();
        if(!nextItem.hasClass('open_flex')){
            nextItem.addClass('open_flex')
        }else{
            nextItem.removeClass('open_flex')
        }
    })

    // SCROLL MENU
    var header = $('header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });
    
    // Discount hover
    $('.discounts_hover_effect').mouseenter(() => {
        $('.nav_select_item_children ul:last-child').css({'display':'flex'})
    })
    $('.nav_select_item_children ul:last-child').mouseleave(() => {
        $('.nav_select_item_children ul:last-child').css({'display':'none'})
    })

    
})