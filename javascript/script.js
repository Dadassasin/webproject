window.addEventListener("DOMContentLoaded", function () {
    $(".reviews-slider").on("init", function () {
        $(".reviews-slide-current-num").text("0" + 1);
    });

    $(".reviews-slider").on("afterChange", function (event, slick, currentSlide) {
        $(".reviews-slide-current-num").text("0" + (currentSlide + 1));
    });

    $(".reviews-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: true,
        dots: false,
        fade: true,
        adaptiveHeight: true,
        easing: true,
        appendArrows: ".reviews-slider-arrows",
        prevArrow: "<button class=\"slick-prev\"></button>",
        nextArrow: "<button class=\"slick-next\"></button>",
    });

    new Swiper(".image_slider",{
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,
        freemode:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        speed: 500,
        breakpoints: {
            480: {
                slidesPerView: 4,
                spaceBetween: 10
            },
            920: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    new Swiper(".image2_slider",{
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,
        freemode:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection:true,

        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        speed: 500,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            920: {
                slidesPerView: 5,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
  });
