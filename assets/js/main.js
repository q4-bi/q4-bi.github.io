$(function() {
    //Preloader
    $('#preloader').fakeLoader({
        timeToHide: 1200,
        zIndex: 999999,
        spinner: 'spinner1',
        bgColor: '#fff',
        imagePath: 'images/page_loading.svg'
    });

    //Contact Button Effect
    var contactBtnBg = $('.btn-effect span');
    $('.btn-effect').mouseenter(function() {
            contactBtnBg.removeClass('reset').addClass('enter');
        })
        .mouseleave(function() {
            contactBtnBg.removeClass('enter').addClass('leave');
            setTimeout(function() {
                contactBtnBg.removeClass('leave').addClass('reset');
            }, 500);
        });

    //Show Contact Overlay
    $('#trigger-overlay').on('click', { container: $('.main-container'), overlay: $('.overlay') }, toggleOverlay);
    $('.overlay-close').on('click', { container: $('.main-container'), overlay: $('.overlay') }, toggleOverlay);

    //Contact Form AJAX Request
    var contactForm = $('#contact-form');
    var contactMsg = $('#contact-msg');
    contactForm.on('submit', function(e) {
        contactMsg.html('');
        $.ajax({
            type: 'POST',
            url: 'contact.php',
            data: contactForm.serialize(),
            success: function(response) {
                contactMsg.html(response);
            }
        });
        e.preventDefault();
    });

    //Subscribe Form AJAX Request
    var subscribeForm = $('#subscribe-form');
    var subscribeMsg = $('#subscribe-msg');
    subscribeForm.on('submit', function(e) {
        subscribeMsg.html('');
        $.ajax({
            type: 'POST',
            url: 'subscribe.php',
            data: subscribeForm.serialize(),
            success: function(response) {
                subscribeMsg.html(response);
            }
        });
        e.preventDefault();
    });
});