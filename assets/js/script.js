const close_cta_top = document.querySelector('.close_cta_top'); //button close cta
const cta_top = document.querySelector('.cta_top');
const item_ask = document.querySelectorAll('.list_ask li h4');
const item_ask_p = document.querySelectorAll('.list_ask li p');
const icon_item = document.querySelectorAll('.list_ask li h4 i');

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

    $("#client_slide").owlCarousel({
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
                items:2
            },
            1000:{
                items:3
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
    
            }else{
                item_ask_p.forEach((item) => {
    
                    item.classList.remove('open_list_p');
        
                });
        
                item_ask_p[index].classList.add('open_list_p');
                icon_item[index].classList.replace('bi-dash','bi-plus');
        
            }
        }
        
    });

})
