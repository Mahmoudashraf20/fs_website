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

document.getElementById('toggleButton').addEventListener('click', function() {
    var moreText = document.getElementById('moreText');
    var text = document.getElementById('text');
    var button = document.getElementById('toggleButton');

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        text.style.display = 'block';
        text.style.webkitLineClamp = 'unset';
        button.textContent = 'Read less';
    } else {
        moreText.style.display = 'none';
        text.style.webkitLineClamp = '3';
        button.textContent = 'Read more';
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
  

  ////////////////////////////// translation - button /////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('languageButton');
  
    languageButton.addEventListener('click', () => {
      const currentLang = document.documentElement.lang;
  
      if (currentLang === 'en') {
        // Switch to Arabic
        document.documentElement.lang = 'ar';
        document.body.dir = 'rtl';
        languageButton.textContent = 'Switch to English';
        switchToArabic();
      } else {
        // Switch to English
        document.documentElement.lang = 'en';
        document.body.dir = 'ltr';
        languageButton.textContent = 'Switch to Arabic';
        switchToEnglish();
      }
    });
  });
  
  const translations = {
    en: {
      title: "English",
      headline: "Welcome",
      description: "This is an example text in English.",
      // Add more translations as needed
    },
    ar: {
      title: "عربي",
      headline: "مرحبا",
      description: "هذا نص تجريبي باللغة العربية.",
      // Add more translations as needed
    }
  };
  
  function switchToArabic() {
    translatePage('ar');
  }
  
  function switchToEnglish() {
    translatePage('en');
  }
  
  function translatePage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');
    
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  
    document.title = translations[lang].title;
  }
  