jQuery('document').ready(function(){
    jQuery('nav a').on('click', function(e){
        e.preventDefault();
        var location = jQuery(this).attr('href');
        jQuery('html,body').animate({
            scrollTop: jQuery(location).offset().top-80
        },800);
    });
    jQuery('.logo').on('click', function(e){
        e.preventDefault();
        var location1 = jQuery('#hero');
        jQuery('html,body').animate({
            scrollTop: jQuery(location1).offset().top
        },800);
    });
    jQuery(document).ready(function(){
        jQuery('.owl-carousel').owlCarousel({
            loop:true,
            margin: 20,
            nav: false,
            dots: true,
            slideBy: 'page',
            autoplay: true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                768:{
                    items:1,
                    nav:true,
                },
                960:{
                    items:4,
                    nav:true,
                }
            }
        });
    });
    jQuery('button.tab').on('click', function(e){
        e.preventDefault();  
              
        jQuery('button.tab').each(function(){
            jQuery(this).removeClass('active');
        });
        jQuery(this).addClass('active');        
    });

    jQuery('.mobile_menu').on('click',function(e){
        e.preventDefault();
        menu_tab = jQuery(this).next().css('display');
        jQuery('nav').each(function(){            
            jQuery(this).css('display','none');            
        });
        
        if (menu_tab == 'flex') {
            jQuery(this).next().css('display','none');
        }
        else{
            jQuery(this).next().css('display','flex');
        }

        
    })
    jQuery('nav a').on('click',function(e){
        e.preventDefault();
        if (jQuery(window).width() < 768) {
            jQuery('nav').each(function(){
                jQuery(this).css('display','none');
            }); 
        }
        
    })

    jQuery('.accordion').on('click', function(e){
        e.preventDefault();  
        tab = jQuery(this);
        tab_content = tab.next()
        jQuery('.tab-content').each(function(){
            jQuery(this).css('display', 'none');
        });
        jQuery('.accordion').each(function(){
            jQuery(this).removeClass('active');
        });
        if (jQuery(tab_content).css('display') == 'none') {
            jQuery(tab_content).css('display', 'block');            
        }
        if (tab.attr('class') != 'active') {
            tab.addClass('active');
        }
        
    })
})
