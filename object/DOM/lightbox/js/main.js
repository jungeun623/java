window.addEventListener("load", function () {
  const pics = this.document.querySelectorAll(".pic");
  const lightbox = this.document.querySelector("#lightbox");
  const lightboxImg = this.document.querySelector("#lightboxImage");
  pics.forEach(function (pic) {
    // console.log(pic);
    pic.addEventListener("click", function () {
      // console.log(this);
      const bicImg = this.getAttribute("data-src");
      lightboxImg.setAttribute("src", bicImg);
      lightbox.style.display ="block"
    });
  });
  lightbox.onclick = function(){
    lightbox.style.display = "none"
  }
});
