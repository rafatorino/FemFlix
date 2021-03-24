$('.owl-carousel').owlCarousel({
    loop:true, //deixa scroll infinito qdo true
    margin:13, //margem entre as imagens
    nav:false, //ativa ou desativa flechas direcionais embaixo das imagens
    responsive:{
        0:{
            items:1 //numero maximo de imagens quando a tela ta em 0
        },
        600:{
            items:3 //numero maximo de imagens qdo a tela ta em menos de 600px
        },
        1000:{
            items:6 //numero de imagens maximo quando a tela ta em 1000px
        }
    }
})

