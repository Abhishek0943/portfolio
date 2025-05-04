const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // paginationDynamicBullets="true",
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // autoplay: {
    //     delay: 3000,
    // },
    controller: {
        inverse: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const items = document.querySelectorAll('.accordion-button');
function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    const id = this.getAttribute('id');
    items.forEach((item) => {
        const itemId = item.getAttribute("id")
        if (itemId === id) {
            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
            else {
                this.setAttribute('aria-expanded', 'false');
            }
        }
        else {
            item.setAttribute('aria-expanded', 'false');
        }
    })
}
items.forEach((item, index) => item.addEventListener('click', toggleAccordion));