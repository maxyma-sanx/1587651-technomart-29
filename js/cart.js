const buttonItems = document.querySelectorAll(".product-link-button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close-button");

for (index = 0; index < buttonItems.length; index++) {
   button = buttonItems[index];
   button.addEventListener('click', function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
   });
}

cartClose.addEventListener('click', function (evt) {
   evt.preventDefault();
   cartPopup.classList.remove("modal-show");
})

window.addEventListener('keydown', function (evt) {
   if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("modal-show")) {
         evt.preventDefault();
         cartPopup.classList.remove("modal-show");
      }
   }
})