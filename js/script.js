$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:30,
        loop:true,
        nav:true,
        autoplay:true,
        responsive :{
            0:{
                items:1
            },
            450: {
                items:2
            },
            768:{
                items:3
            }
        }
    });
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })

});