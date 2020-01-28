const thumbnails = document.querySelectorAll(".thumbnail");
const increaseArrow = document.querySelector(".increase");
const decreaseArrow = document.querySelector(".decrease");
const quantity = document.querySelector(".quantity-input");

const slider = tns({
    container: ".image-carousel",
    items: 1,
    slideBy: "page",
    //mouseDrag: true,
    swipeAngle: false,
    autoplay: true,
    speed: 400,
    controls: false,
    navContainer: "#carousel-thumbnails",
    navPosition: "top",
    navAsThumbnails: true
});


thumbnails.forEach(function(thumbnail) {
  thumbnail.addEventListener("click", function(event){
    
    thumbnails.forEach(function(thumb) {
      if(thumb.classList.contains("thumb-indicator")) {
        thumb.classList.toggle("thumb-indicator");
      }
    });

    thumbnail.classList.toggle("thumb-indicator");
  });
});

increaseArrow.addEventListener("click", ()=> quantity.value++);
decreaseArrow.addEventListener("click", ()=> {
  if(quantity.value > 0){
    quantity.value--;
  }
});