let modal = document.getElementById('popup');
let btn = document.getElementById("modal");
let span = document.querySelector(".close");

btn.onclick = function (e) {
   modal.style.visibility = "visible";
   modal.style.opacity = "1";
   e.preventDefault();
}
span.onclick = function (e) {
   modal.style.visibility = "hidden";
   modal.style.opacity = "0"
   e.preventDefault();
}

window.onclick = function () {
   if (e.target === modal) {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0"
   }
}
