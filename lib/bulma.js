// jQuery = Zepto;

document.addEventListener('DOMContentLoaded', function () {
    // The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#' + burger.dataset.target);
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
    const spy = new Gumshoe('#scrollspy-nav a',
        {navClass: 'is-active',}
        );

    const scroll = new SmoothScroll('#scrollspy-nav a[href*="#"]');

    $('#pupils-gallery').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        draggable: false
    });

    // new Glider(document.querySelector('.glider'));

    $('#pupils-gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
        // other options
    });


    $('#slick-reviews').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    adaptiveHeight: true
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // const section = document.querySelectorAll(".screen");
    // let sections = {},
    //     i = 0;
    //
    // Array.prototype.forEach.call(section, function (e) {
    //     sections[e.id] = e.offsetTop;
    // });
    //
    // window.onscroll = function () {
    //     const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    //
    //     for (i in sections) {
    //         if (sections[i] <= scrollPosition) {
    //             const currentActive = document.querySelector('.is-active');
    //             if (currentActive) {
    //                 currentActive.setAttribute('class', '');
    //             }
    //             const query = 'a[href*=' + i + ']';
    //             document.querySelector(query).parentElement.setAttribute('class', 'is-active');
    //         }
    //     }
    // };

});