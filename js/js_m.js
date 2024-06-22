/////////////////////////////// image scroll/////////////////////////
function scrollCards(direction) {
  const container = document.getElementById('cardContainer');
  const scrollAmount = 100; // Adjust as needed
  const cards = container.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth;

  container.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });

  // Check if we've scrolled to the beginning or end
  if (direction === -1 && container.scrollLeft === 0) {
    // Duplicate cards at the end
    for (let i = 0; i < cards.length; i++) {
      const clone = cards[i].cloneNode(true);
      container.appendChild(clone);
    }
  } else if (direction === 1 && container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    // Duplicate cards at the beginning
    for (let i = cards.length - 1; i >= 0; i--) {
      const clone = cards[i].cloneNode(true);
      container.insertBefore(clone, container.firstElementChild);
    }
    // Adjust scroll position to show duplicated cards
    container.scrollLeft = cardWidth;
  }
}
////////////////////////////////////////////////////////////
// initialize aos
    // Initialize AOS
    AOS.init();
/////////////////////////////////////////////////////////////


document.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const firstSection = document.querySelector('#first-section');
  const sectionHeight = firstSection.offsetHeight;

  if (window.scrollY > sectionHeight) {
      navbar.classList.add('navbar-scrolled');
      navbar.classList.remove('navbar-transparent');
  } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('navbar-scrolled');
  }
});


//////////////////////////////// image - slider //////////////////////////////////
  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

 /**
   * Clients Slider
   */
 new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  document.addEventListener('DOMContentLoaded', () => {
    const lightbox = GLightbox({
      selector: 'a.gallery-lightbox'
    });
  });

  
  