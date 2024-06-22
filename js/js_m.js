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

  
  
// -----------------------------------product switcher------------

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

  

  const displayProducts = (products) => {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = products.map(product => `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>show</strong></p>
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
            
 /**
   * Initiate Pure Counter 
   */
 new PureCounter();