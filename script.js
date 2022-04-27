window.addEventListener('load', (e) => {
    //      ------> Login Box

    const openLoginBtn = document.querySelector('.user')
    const closeLoginBtn = document.querySelector('.close-btn')
    const loginOuter = document.querySelector('.login-outer__box')
    const loginInner = document.querySelector('.login-box')

    openLoginBtn.addEventListener('click', () => {
        loginOuter.style.right = '0'; // owl corusel
        loginInner.style.left = '35%'
    })

    closeLoginBtn.addEventListener('click', () => {
        loginOuter.style.right = '-105%';
        loginInner.style.left = '105%'
    })

    //              Login Box <-------


    //      ------> To Top Btn

    const toTop = document.querySelector('.to-top__box')
    
    window.addEventListener('scroll', () => {
        if(pageYOffset>500) {
            toTop.style.right = '30px'
        }
        else {
            toTop.style.right = '-200%'
        }
    })

    toTop.addEventListener('click', () => {
        scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })

    //              To Top Btn <-------


    //      ------> Nav Menu

    const navMenu = document.querySelector('nav')

    window.addEventListener('scroll', () => {
        if(pageYOffset > (window.innerHeight * 0.08 /* = 8vh */)) {
            navMenu.style.position = 'fixed'
            navMenu.style.top = 0
        }
        else {
            navMenu.style.position = 'static'
        }
    })

    //              Nav Menu <-------
})



// Upto Books Section 

var swiper = new Swiper(".upto-books", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// featured Section 

var swiper = new Swiper(".book-cards", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});


// Arrivals Section

var swiper = new Swiper(".arrivals-cards", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// Reviews Section

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// Blogs Section

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

