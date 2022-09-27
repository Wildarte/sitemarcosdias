const load_more_office = document.querySelector('.load_more_office');
const load_more_office_img = document.querySelector('.load_more_office img');


let offices = [
    ['Escritório de Advocacia em São Paulo/SP', 'Av. Ordem e Progresso, 157 - sala 705', '01.141-030', 'assets/img/mapa_BH 1.jpg', 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg'],
    ['Escritório de Advocacia em São Paulo/SP', 'Av. Ordem e Progresso, 157 - sala 705', '01.141-030', 'assets/img/mapa_BH 1.jpg', 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg'],
    ['Escritório de Advocacia em São Paulo/SP', 'Av. Ordem e Progresso, 157 - sala 705', '01.141-030', 'assets/img/mapa_BH 1.jpg', 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg'],
    ['Escritório de Advocacia em São Paulo/SP', 'Av. Ordem e Progresso, 157 - sala 705', '01.141-030', 'assets/img/mapa_BH 1.jpg', 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg'],
]

let total_offices = offices.length; //total offices card
let count_office = 0; //

console.log(offices.length);

function put_office(title, address, cep, tel, img_src){

    let article = document.createElement('article');
    article.classList.add('card_office_uni', 'd-flex');

    article.innerHTML = `<div class="f-50 office_uni_img"> <img src="${img_src}" alt=""> </div> <div class="f-50 office_uni_info"> <div class="office_content"> <header class="office_header_info"> <i class="bi bi-geo-alt-fill title-default"></i> <h2 class="title-default">${title}</h2> </header> <div class="office_contact"> <div class="office_contact_row"> <span>Endereço:</span> <p class="desc-default">${address}</p> </div> <div class="office_contact_row"> <span>CEP:</span> <p class="desc-default">${cep}</p> </div> <div class="office_contact_row"> <span>Tel:</span> <p class="desc-default">${tel}</p> </div> </div> <img src="assets/img/mapa_BH 1.jpg" alt=""> </div> </div>`;

    office_uni.append(article);
    

}


document.addEventListener('scroll', () => {

    let altura_leta = window.screen.height;
    let dist_elemento = load_more_office.getBoundingClientRect().top

    if(altura_leta > (dist_elemento + 200)){

        if(count_office < total_offices){

            setTimeout(function(){

                if(estaVisivel(load_more_office)){

                    load_more_office_img.style.display = "flex";
        
                    put_office(offices[count_office][0], offices[count_office][1], offices[count_office][2], offices[count_office][3], offices[count_office][4]);

                    count_office++;
        
                }else{
        
                }
            }, 600);

        }else{
            load_more_office_img.style.display = "none";
        }
        
    }

    //console.log('count_office: '+count_office);

    console.log('scroll: ');

    console.log(offices[0][1])

});


function estaVisivel(el) {

    const posicoes = el.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;

    let estaVisivel = false
    
    if((inicio >= 0) && (fim <= window.innerHeight)) {
        estaVisivel = true;
    }
    
    return estaVisivel;
    
}