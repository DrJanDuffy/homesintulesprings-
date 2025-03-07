$(document).ready(function() {
    // Initialize sliders
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    });
    
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // Property detail page sliders
    $('.property-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.property-slider-nav'
    });
    
    $('.property-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.property-slider-main',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    
    // Mobile menu toggle
    $('.mobile-menu-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('menu-open');
    });
    
    // Smooth scroll to anchor links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });
    
    // Form submission handler
    $('#home-contact-form').submit(function(e) {
        e.preventDefault();
        // Replace with actual form submission logic
        alert('Your message has been sent. Dr. Duffy will contact you shortly!');
        this.reset();
    });
    
    // Initialize Google Maps (if on property detail page)
    if ($('#property-map').length) {
        initMap();
    }
});

// Google Maps initialization for property detail page
function initMap() {
    // Replace with actual property coordinates
    var propertyLocation = {lat: 36.3031, lng: -115.2794}; // Approximate coordinates for Tule Springs
    
    var map = new google.maps.Map(document.getElementById('property-map'), {
        zoom: 14,
        center: propertyLocation,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#444444"}]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f2f2f2"}]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"saturation": -100}, {"lightness": 45}]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#c8d7d4"}, {"visibility": "on"}]
            }
        ]
    });
    
    var marker = new google.maps.Marker({
        position: propertyLocation,
        map: map,
        icon: {
            url: '../images/map-pin.png',
            scaledSize: new google.maps.Size(40, 40)
        }
    });
}
