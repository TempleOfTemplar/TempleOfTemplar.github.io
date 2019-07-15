// jQuery = Zepto;

document.addEventListener('DOMContentLoaded', function () {
    // The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
    console.log("WTF");

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
        slidesToShow: 2,
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


    function ellipsizeTextBox(classname) {
        const items = document.getElementsByClassName(classname);
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            const wordArray = element.innerHTML.split(' ');
            const readmore = document.createElement("a");
            readmore.className = "modal-button has-text-link open-popup-link";
            // readmore.setAttribute("data-target", "review" + i);
            // readmore.setAttribute("data-mfp-src", "#review_0");
            readmore.textContent = "читать дальше";
            readmore.onclick = (event) => {
                const elementToInteract = document.getElementById("review_" + i);
                if (elementToInteract) {
                    elementToInteract.classList.add("is-active");
                }
            };
            while (element.scrollHeight > 240) {
                wordArray.pop();
                element.innerHTML = wordArray.join(' ') + '... ';
                //<span class="is-link modal-button" data-target="review_' + i + '">читать дальше</span>'
                element.appendChild(readmore)
            }
        }
        for (let element of items) {

        }
    }
    ellipsizeTextBox('review-text');

    // $('.open-popup-link').magnificPopup({
    //     items: {
    //         src: '#review_0',
    //         type: 'inline',
    //         modal: true
    //     }
    // });
    // $('.review-text').readmore({heightMargin: 50});
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