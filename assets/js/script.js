
// smooth scroll
$(document).ready(function(){
    // Initiate the wowjs
    new WOW().init();

    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Skills
$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
}, { offset: '80%' });

// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});

$('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
});

// Typed Initiate
if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.typed-text-output', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}

$("form[name='contactForm']").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    var formData = $(this).serialize();

    // Send AJAX request to email.php
    $.ajax({
        type: "POST",
        url: $(this).attr("action"),
        data: formData,
        success: function (response) {
            console.log(formData)
            if (response === "sent") {
                // Email sent successfully
                alert("Message sent successfully!");
                // Optionally, you can reset the form after successful submission
                $("form[name='contactForm']").trigger("reset");
            } else {
                // Email sending failed
                alert("Failed to send message. Please try again later.");
            }
        },
        error: function () {
            // AJAX request failed
            alert("Failed to send message. Please try again later.");
        }
    });
});


const downloadCV = () => {
    const gDriveFileID = '1_M1qh6sjskWpZ2_dT-LUGwkq6N74UGKs'; 
    //const url = `https://drive.google.com/file/d/${gDriveFileID}/view`; 
    const url = `https://drive.google.com/uc?export=download&id=${gDriveFileID}`; 
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank'; 
    link.click();
}
