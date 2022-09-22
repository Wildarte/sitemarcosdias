const close_cta_top = document.querySelector('.close_cta_top'); //button close cta
const cta_top = document.querySelector('.cta_top');
const item_ask = document.querySelectorAll('.list_ask li h4');
const item_ask_p = document.querySelectorAll('.list_ask li p');
const icon_item = document.querySelectorAll('.list_ask li h4 i');
const btn_menu = document.querySelector('.btn_menu');
const nav_menu = document.querySelector('nav.menu');
const btn_close_menu = document.querySelector('.btn_close_menu');

$(document).ready(function(){
    $("#slide_hero").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $("#office_slide").owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:1500,
        callbacks: true,
        transitionStyle: 'backSlide',
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $("#client_slide").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout: 8000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $("#follow_right").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
                nav: true
            },
            1000:{
                items:3,
                nav: true
            }
        }
    });
});

close_cta_top.addEventListener('click', () => {

    cta_top.classList.add('d-none');

});

item_ask.forEach((item, index) => {

    item.addEventListener('click', (e) => {

        if(item_ask_p[index]){

            
            
            if(item_ask_p[index].classList.contains('open_list_p')){

                item_ask_p[index].classList.remove('open_list_p');
                icon_item[index].classList.replace('bi-plus','bi-dash');
                
                item_ask.forEach((item) => {
                    item.classList.remove('bg-blue-dark');
                    item.classList.remove('color-blue-dark');
                    
                })
    
            }else{
                item_ask_p.forEach((item2) => {
    
                    item2.classList.remove('open_list_p');
        
                });

                item_ask.forEach((item) => {
                    item.classList.remove('bg-blue-dark');
                    item.classList.remove('color-blue-dark');
                    
                })
        
                item_ask_p[index].classList.add('open_list_p');
                icon_item[index].classList.replace('bi-dash','bi-plus');
                item.classList.add('bg-blue-dark');
                item.classList.add('color-blue-dark');
        
            }
        }
        
    });

})


btn_menu.addEventListener('click', () => {

    nav_menu.classList.add('open_menu_mobile');

});

btn_close_menu.addEventListener('click', () => {

    nav_menu.classList.remove('open_menu_mobile');

});