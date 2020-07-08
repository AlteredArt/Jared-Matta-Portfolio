// change this light box to target projects
// bring in project js
// lightbox
const closeLightbox=document.querySelector(".close-lightbox");
const lightbox=document.querySelector(".lightbox");
const lightboxImage=lightbox.querySelector("img");

  lightbox.addEventListener("click", function(){
    if(event.target!=lightboxImage){
        lightbox.classList.remove("show");
      lightbox.classList.add("hide");
    }
  })

  closeLightbox.addEventListener("click", function(){
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
})

const gallery=document.querySelector(".portfolio-gallery");
const galleryItem=gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
  element.querySelector(".fa-plus").addEventListener("click", function(){
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboxImage.src=element.querySelector("img").getAttribute("src")
  })
})
// lightbox
