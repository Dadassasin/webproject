function faq() {
    let questions_divs = document.getElementsByClassName("question-answer");
    let answers = document.getElementsByClassName("answer");
    for (let i = 0; i < questions_divs.length; i++) {
        questions_divs[i].addEventListener("click", function () {
            questions_divs[i].classList.toggle("active-question-answer");
            if (!questions_divs[i].className.includes("active-question-answer")) {
                questions_divs[i].style.width = "fit-content";
                answers[i].style.display = "none";
            } else {
                questions_divs[i].style.width = "100%";
                answers[i].style.display = "block";
                for (let j = 0; j < questions_divs.length; j++) {
                    if (j !== i && questions_divs[j].className.includes("active-question-answer")) {
                        questions_divs[j].classList.toggle("active-question-answer");
                        questions_divs[j].style.width = "fit-content";
                        answers[j].style.display = "none";
                    }
                }
            }
        });
    }
}

function webform() {
    let webformTextInput = document.getElementById("webform-text-input");
    let webformTelInput = document.getElementById("webform-tel-input");
    let webformEmailInput = document.getElementById("webform-email-input");
    let webformTextArea = document.getElementById("webform-textarea");
    let webformCheckbox = document.getElementById("webform-checkbox");

    webformTextInput.addEventListener("input", function () {
        localStorage.setItem("webformTextInput", webformTextInput.value);
    });
    webformTelInput.addEventListener("input", function () {
        localStorage.setItem("webformTelInput", webformTelInput.value);
    });
    webformEmailInput.addEventListener("input", function () {
        localStorage.setItem("webformEmailInput", webformEmailInput.value);
    });
    webformTextArea.addEventListener("input", function () {
        localStorage.setItem("webformTextArea", webformTextArea.value);
    });
    webformCheckbox.addEventListener("input", function () {
        localStorage.setItem("webformCheckbox", webformCheckbox.value);
    });

    webformTextInput.value = localStorage.getItem("webformTextInput");
    webformTelInput.value = localStorage.getItem("webformTelInput");
    webformEmailInput.value = localStorage.getItem("webformEmailInput");
    webformTextArea.value = localStorage.getItem("webformTextArea");
    webformCheckbox.value = localStorage.getItem("webformCheckbox");

    let webform = document.getElementById("webform");

    webform.addEventListener("submit", function (event) {
        let formData = new FormData(webform);
        fetch("https://formcarry.com/s/YqxddsXBwuEER", {
            method: "POST",
            body: formData
        })
            .then((result) => {
                return result.text();
            })
            .then(() => {
                alert("Сообщение успешно отправлено!");
                webformTextInput.value = "";
                webformTelInput.value = "";
                webformEmailInput.value = "";
                webformTextArea.value = "";
                webformCheckbox.checked = false;
                localStorage.setItem("webformTextInput", webformTextInput.value);
                localStorage.setItem("webformTelInput", webformTelInput.value);
                localStorage.setItem("webformEmailInput", webformEmailInput.value);
                localStorage.setItem("webformTextArea", webformTextArea.value);
            })
            .catch((error)=>{
                alert("Сообщение не отправлено по из-за ошибки. Попробуйте еще раз.\n" + error);
            });
        event.preventDefault();
    });
}

function topmenu() {
    let menu_button = document.getElementById("menu-button");
    let menu = document.getElementById("links");
    menu_button.addEventListener("click", function () {
        menu.classList.toggle("open-menu");
    });
}

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

    faq();
    webform();
    topmenu();
});
