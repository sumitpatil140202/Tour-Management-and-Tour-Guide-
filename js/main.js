(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

//     // Function to handle form submission
//     window.handleBooking = function () {
//         var name = $('#name').val();
//         var email = $('#email').val();
//         var datetime = $('#datetime').val();
//         var destination = $('#select1').val();
//         var persons = $('#SelectPerson').val();
//         var categories = $('#CategoriesSelect').val();
//         var specialRequest = $('#message').val();

//         var informationString = `
//         <div style="font-family: 'Arial', sans-serif; padding: 20px;">
//             <h1 style="color: #333;">Booking Information</h1>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Date & Time:</strong> ${datetime}</p>
//             <p><strong>Destination:</strong> ${destination}</p>
//             <p><strong>Persons:</strong> ${persons}</p>
//             <p><strong>Categories:</strong> ${categories}</p>
//             <p><strong>Special Request:</strong> ${specialRequest}</p>
//             <a href="booking.html" style="background-color: #4CAF50; /* Green */
//             border: none;
//             color: white;
//             padding: 15px 32px;
//             text-align: center;
//             text-decoration: none;
//             display: inline-block;
//             font-size: 16px;
//             margin: 4px 2px;
//             transition-duration: 0.4s;
//             cursor: pointer;
//             border-radius: 12px;">Save Details</a>
//         </div>
//     `;

//     var newTab = window.open('', '_blank');
//     newTab.document.write('<html><head><title>Booking Information</title>');
//     newTab.document.write('<style>body { font-family: "Arial", sans-serif; padding: 20px; }</style>');
//     newTab.document.write('</head><body>');
//     newTab.document.write(informationString);
//     newTab.document.write('</body></html>');
//     newTab.document.close();
// };
//     // newTab.document.getElementById('saveDetailsBtn').addEventListener('click', function() {
//     //     newTab.close();
//     // });

})(jQuery);
