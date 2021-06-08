
const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItemEl = animItems[index];

            const animItemElHeight = animItemEl.offsetHeight;

            const animItemElOffset = offset(animItemEl).top;

            const animStart = 3;

            let animItemElPoint = window.innerHeight - animItemElHeight / animStart;

            if (animItemElHeight > window.innerHeight) {
                animItemElPoint = animItemElHeight - window.innerHeight / animStart;
            }


            if ((pageYOffset > animItemElOffset - animItemElPoint) && pageYOffset < (animItemElOffset + animItemElHeight)) {
                animItemEl.classList.add('_active');
            } else {
                if (!animItemEl.classList.contains('_anim-no-hide')) {
                    animItemEl.classList.remove('_active');
                }

            }
        }
    }

    function offset(elem) {
        const rect = elem.getBoundingClientRect(),
            scrolLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrolTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrolTop, left: rect.left + scrolLeft }

    }


    setTimeout(() => {
        animOnScroll();
    }, 300);
}

const closeButton = document.querySelector('.close');
const contactButton = document.querySelector('.get_contact_button');
const modalWindow = document.querySelector('.madal_window');
const contactButton2 = document.querySelector('.go_contact');

contactButton2.addEventListener('click', function () {
    modalWindow.classList.add('active');
})
contactButton.addEventListener('click', function () {
    modalWindow.classList.add('active');
})
closeButton.addEventListener('click', function () {
    modalWindow.classList.remove('active');

})



