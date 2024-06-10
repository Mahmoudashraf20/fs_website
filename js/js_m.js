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
  
  //////////////////////////////////////
  
// JavaScript to handle switching products
document.addEventListener('DOMContentLoaded', (event) => {
  const productContainer = document.getElementById('productContainer');


///////////////////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the image within the card and insert it inside the modal - use its "alt" text as a caption
var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  var img = card.querySelector(".card-img-top");
  var modalImg = modal.querySelector(".modal-content img");

  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  
// Call the setupModal function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  setupModal();
});





///////////////////////////////////////////////////////////////////////////////////////

  const productSections = {
    product1: [
      {
        name: 'Product 1A',
        description: 'This is the description for product 1A.',
        price: '$10',
        imageUrl: '../image/bag.jpg'
      },
      {
        name: 'Product 1B',
        description: 'This is the description for product 1B.',
        price: '$15',
        imageUrl: '../image/bag.jpg'
      }
    ],
    product2: [
      {
        name: 'Product 2A',
        description: 'This is the description for product 2A.',
        price: '$20',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product3: [
      {
        name: 'Product 3A',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product4: [
      {
        name: 'Product 4444',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product5: [
      {
        name: 'Product 5555',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product6: [
      {
        name: 'Product 66',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ]
  };

  const displayProducts = (products) => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = products.map(product => `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Price: ${product.price}</strong></p>
            <button class="btn btn-primary btn-sm" onclick="showProductDetails('${product.name}', '${product.description}', '${product.price}', '${product.imageUrl}')">Details</button>
          </div>
        </div>
      </div>  
    `).join('');
  };
  const showProductDetails = (name, description, price, imageUrl) => {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    modalImage.src = imageUrl;
    modalTitle.textContent = name;
    modalDescription.textContent = description;
    modalPrice.textContent = `Price: ${price}`;

    modal.style.display = 'block';
  };

  // Close the modal when the user clicks the close button or outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  document.getElementsByClassName('close')[0].onclick = function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  };



  document.getElementById('btnProduct1').addEventListener('click', () => {
    displayProducts(productSections.product1);
  });
  document.getElementById('btnProduct2').addEventListener('click', () => {
    displayProducts(productSections.product2);
  });
  document.getElementById('btnProduct3').addEventListener('click', () => {
    displayProducts(productSections.product3);
  });
  document.getElementById('btnProduct4').addEventListener('click', () => {
    displayProducts(productSections.product4);
  });
  document.getElementById('btnProduct5').addEventListener('click', () => {
    displayProducts(productSections.product5);
  });
  document.getElementById('btnProduct6').addEventListener('click', () => {
    displayProducts(productSections.product6);
  });

  // Initial display
  displayProducts(productSections.product1);
});
            



// --------------------------------------------------------------------

// JavaScript to handle switching products
document.addEventListener('DOMContentLoaded', (event) => {
  const productContainer = document.getElementById('productContainer');


///////////////////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the image within the card and insert it inside the modal - use its "alt" text as a caption
var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  var img = card.querySelector(".card-img-top");
  var modalImg = modal.querySelector(".modal-content img");

  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  
// Call the setupModal function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  setupModal();
});





///////////////////////////////////////////////////////////////////////////////////////

  const productSections = {
    product1: [
      {
        name: 'Product 1A',
        description: 'This is the description for product 1A.',
        price: '$10',
        imageUrl: '../image/bag.jpg'
      },
      {
        name: 'Product 1B',
        description: 'This is the description for product 1B.',
        price: '$15',
        imageUrl: '../image/bag.jpg'
      }
    ],
    product2: [
      {
        name: 'Product 2A',
        description: 'This is the description for product 2A.',
        price: '$20',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product3: [
      {
        name: 'Product 3A',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product4: [
      {
        name: 'Product 4444',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product5: [
      {
        name: 'Product 5555',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product6: [
      {
        name: 'Product 66',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ]
  };

  const displayProducts = (products) => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = products.map(product => `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Price: ${product.price}</strong></p>
            <button class="btn btn-primary btn-sm" onclick="showProductDetails('${product.name}', '${product.description}', '${product.price}', '${product.imageUrl}')">Details</button>
          </div>
        </div>
      </div>  
    `).join('');
  };
  const showProductDetails = (name, description, price, imageUrl) => {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    modalImage.src = imageUrl;
    modalTitle.textContent = name;
    modalDescription.textContent = description;
    modalPrice.textContent = `Price: ${price}`;

    modal.style.display = 'block';
  };

  // Close the modal when the user clicks the close button or outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  document.getElementsByClassName('close')[0].onclick = function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  };



  document.getElementById('btnProduct1').addEventListener('click', () => {
    displayProducts(productSections.product1);
  });
  document.getElementById('btnProduct2').addEventListener('click', () => {
    displayProducts(productSections.product2);
  });
  document.getElementById('btnProduct3').addEventListener('click', () => {
    displayProducts(productSections.product3);
  });
  document.getElementById('btnProduct4').addEventListener('click', () => {
    displayProducts(productSections.product4);
  });
  document.getElementById('btnProduct5').addEventListener('click', () => {
    displayProducts(productSections.product5);
  });
  document.getElementById('btnProduct6').addEventListener('click', () => {
    displayProducts(productSections.product6);
  });

  // Initial display
  displayProducts(productSections.product1);
});
            



// -----------------------------------khara------------

// JavaScript to handle switching products
document.addEventListener('DOMContentLoaded', (event) => {
  const productContainer = document.getElementById('productContainer');


///////////////////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the image within the card and insert it inside the modal - use its "alt" text as a caption
var cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
  var img = card.querySelector(".card-img-top");
  var modalImg = modal.querySelector(".modal-content img");

  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  
// Call the setupModal function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  setupModal();
});





///////////////////////////////////////////////////////////////////////////////////////

  const productSections = {
    product1: [
      {
        name: 'Product 1A',
        description: 'This is the description for product 1A.',
        price: '$10',
        imageUrl: '../image/bag.jpg'
      },
      {
        name: 'Product 1B',
        description: 'This is the description for product 1B.',
        price: '$15',
        imageUrl: '../image/bag.jpg'
      }
    ],
    product2: [
      {
        name: 'Product 2A',
        description: 'This is the description for product 2A.',
        price: '$20',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 2B',
        description: 'This is the description for product 2B.',
        price: '$25',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product3: [
      {
        name: 'Product 3A',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product4: [
      {
        name: 'Product 4444',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product5: [
      {
        name: 'Product 5555',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ],
    product6: [
      {
        name: 'Product 66',
        description: 'This is the description for product 3A.',
        price: '$30',
        imageUrl: 'https://via.placeholder.com/150'
      },
      {
        name: 'Product 3B',
        description: 'This is the description for product 3B.',
        price: '$35',
        imageUrl: 'https://via.placeholder.com/150'
      }
    ]
  };

  const displayProducts = (products) => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = products.map(product => `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Price: ${product.price}</strong></p>
            <button class="btn btn-primary btn-sm" onclick="showProductDetails('${product.name}', '${product.description}', '${product.price}', '${product.imageUrl}')">Details</button>
          </div>
        </div>
      </div>  
    `).join('');
  };
  const showProductDetails = (name, description, price, imageUrl) => {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    modalImage.src = imageUrl;
    modalTitle.textContent = name;
    modalDescription.textContent = description;
    modalPrice.textContent = `Price: ${price}`;

    modal.style.display = 'block';
  };

  // Close the modal when the user clicks the close button or outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  document.getElementsByClassName('close')[0].onclick = function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  };



  document.getElementById('btnProduct1').addEventListener('click', () => {
    displayProducts(productSections.product1);
  });
  document.getElementById('btnProduct2').addEventListener('click', () => {
    displayProducts(productSections.product2);
  });
  document.getElementById('btnProduct3').addEventListener('click', () => {
    displayProducts(productSections.product3);
  });
  document.getElementById('btnProduct4').addEventListener('click', () => {
    displayProducts(productSections.product4);
  });
  document.getElementById('btnProduct5').addEventListener('click', () => {
    displayProducts(productSections.product5);
  });
  document.getElementById('btnProduct6').addEventListener('click', () => {
    displayProducts(productSections.product6);
  });

  // Initial display
  displayProducts(productSections.product1);
});
            