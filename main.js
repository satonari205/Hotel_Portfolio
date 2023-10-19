const headList = document.querySelector('.header-list');
const hideList = document.querySelector('.hide-lists');
const menu = document.querySelector('.header-menu');
const hiddenNavi = document.querySelector('.hidden-navi');
const closeBtn = document.querySelector('.close-btn');

headList.addEventListener('click',function(){
    hideList.classList.toggle('appear');
});
menu.addEventListener('click', function() {
    this.classList.toggle('open');
    hiddenNavi.classList.toggle('open');
});
closeBtn.addEventListener('click', function() {
    this.classList.toggle('open');
    hiddenNavi.classList.toggle('open');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 2000,
});

const swiper2 = new Swiper('.swiper2', {
    effect: 'slide',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const els = document.querySelectorAll('.observer');
function handleObserver (entries) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('fade');
      entry.target.unobserve;
    }
  });
}
const observer = new IntersectionObserver(handleObserver);
els.forEach(el => observer.observe(el));
    