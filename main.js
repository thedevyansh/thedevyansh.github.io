$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('#up').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 100);
    });

    document.querySelector('#messageform').addEventListener('submit', () => {
        $('.alert').fadeIn(1000, () => {
            setTimeout(() => {
                $('.alert').fadeOut('slow');
            }, 4000);
        });
    });

    document.querySelector('.openSideNav').addEventListener('click', () => {
        document.querySelector('.sideNav').style.width = "100%";
    });
    
     document.querySelector('.getBack button').addEventListener('click', () => {
        document.querySelector('.sideNav').style.width = "0px";
    });
});

