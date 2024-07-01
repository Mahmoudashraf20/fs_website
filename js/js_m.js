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

window.history.replaceState('', '', '/');

//////////////////////////////// image - slider //////////////////////////////////
 

 
  ////////////////expand text//////////////////////////////////
  function myFunction2() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  //////ar///////
  function myFunction() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "عرض تفاصيل اكثر"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "عرض تفاصيل اقل"; 
      moreText.style.display = "inline";
    }
  }