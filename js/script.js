// ヘッダー=============================
document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a.scroll-link[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (i) {
            i.preventDefault();

            const targetClass = this.getAttribute('href');
            const targetElement = document.querySelector(targetClass);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            };
        });
    });
});

// ハンバーガーメニュー===================
const hamburger = document.querySelector(".hamburger_btn");
const header = document.querySelector(".header");
const links = document.querySelectorAll(".gnav-text a");

hamburger.addEventListener("click", () => {
    header.classList.toggle("open");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        header.classList.remove("open");
    });
});



// スクロールボタン=======================
const sectionAll = document.querySelectorAll('section');
const sectionThird = sectionAll[2];
const scrollButton = document.querySelector('#scroll_button');

const kitTop = sectionThird.getBoundingClientRect().top;

scrollButton.addEventListener('click', () => {
    scrollButton.animate(
        {
            color: ['#000'],
            backgroundColor: '#F7C5D1',
        },
        {
            duration: 150,
            easing: 'ease',
        },
    );

    window.scrollTo({
        top: kitTop,
        left: 0,
        behavior: 'smooth',
    });

});

// 購入ボタン============================
const buyButton = document.querySelector('.button');

buyButton.addEventListener('click', () => {
    buyButton.animate(
        {
            color: ['#000'],
            backgroundColor: '#F7C5D1',
        },
        {
            duration: 180,
            easing: 'ease',
        },
    );
});


// チェックポイント＆所要時間==============

const showElements = () => {

    const elements = document.querySelectorAll(".check-point-item");

    const displayPos = window.innerHeight * 0.8;

    elements.forEach((element) => {

        const elementPos = element.getBoundingClientRect().top;

        if (displayPos > elementPos) {

            element.classList.add("fade-in");
        }
    });
};

window.addEventListener("load", showElements);
window.addEventListener("scroll", showElements);




// よくある質問==========================
const animateTiming = {
    duration: 300,
    easing: 'ease-in-out',
};

const closeDetails = (answer) => [
    {
        height: answer.offsetHeight + "px",
        opacity: 1,
    },
    {
        height: 0,
        opacity: 0,
    },
];

const openDetails = (answer) => [
    {
        height: 0,
        opacity: 0,
    },
    {
        height: answer.offsetHeight + "px",
        opacity: 1,
    },
];

const details = document.querySelectorAll('.details');

document.addEventListener('DOMContentLoaded', () => {
    details.forEach(function (e) {

        const summary = e.querySelector('.summary');
        const answer = e.querySelector('.answer');

        summary.addEventListener('click', (event) => {
            event.preventDefault();

            if (e.getAttribute("open") !== null) {
                const closeAnimate = answer.animate(closeDetails(answer), animateTiming);

                closeAnimate.onfinish = () => {
                    e.removeAttribute("open");
                };

            } else {
                e.setAttribute("open", "true");
                const openAnimate = answer.animate(openDetails(answer), animateTiming);
            };
        });
    });
});