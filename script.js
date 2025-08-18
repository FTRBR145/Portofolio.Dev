var typed = new Typed(".typing", {
    strings: ["Student", "Programmer", "Otaku", "Gamer", "Human", "Genius"],
    typeSpeed: 120,
    backSpeed: 100,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Fatir Syaiful Bahri"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true
})

$(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    
    // scroll-up button show/hide script
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});
 // toggle menu/navbar script
 $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
    // carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,          // aktifin auto scroll
    autoplayTimeout: 5000,   // delay antar scroll
    autoplayHoverPause: true,
    slideBy: 4,              // geser langsung 4 card
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 4,   // tampil 4 card di layar besar
            nav: false
        }
    }
});


