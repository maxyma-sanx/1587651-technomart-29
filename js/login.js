const writeUsLink = document.querySelector(".contacts-button-link");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsClose = writeUsPopup.querySelector(".modal-close-button");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");
const writeUsLogin = writeUsPopup.querySelector(".write-us-name");
const writeUsMail = writeUsPopup.querySelector(".write-us-email");
const writeUsText = writeUsPopup.querySelector(".write-us-description");

writeUsLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeUsPopup.classList.add("modal-show");
   writeUsLogin.focus();
});

writeUsClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   writeUsPopup.classList.remove("modal-show");
   writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
   if (!writeUsLogin.value || !writeUsMail.value || !writeUsText.value) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-error");
      writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
      writeUsPopup.classList.add("modal-error")
   }
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (writeUsPopup.classList.contains("modal-show")) {
         evt.preventDefault();
         writeUsPopup.classList.remove("modal-show");
         writeUsPopup.classList.remove("modal-error");
      }
   }
})