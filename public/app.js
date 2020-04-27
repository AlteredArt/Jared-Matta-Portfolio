// const navSlide = () => {
//   const burger = document.querySelector('.nav-menu');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');
//
//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
//     navLinks.forEach((link, index) => {
//       if (link.style.animate) {
//         link.style.animate = '';
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
//       }
//     });
//     burger.classList.toggle('toggle');
//   });
// }
// navSlide();
// notes
const filterButtons=document.querySelector("#filter-btns").children;
const items=document.querySelector(".portfolio-gallery").children;


  for(let i=0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function(){
      for(let j=0; j<filterButtons.length; j++){
         filterButtons[j].classList.remove("active")
      }
      this.classList.add("active");
      const target=this.getAttribute("data-target")

      for(let k=0; k<items.length; k++){
        items[k].style.display="none";
        if(target==items[k].getAttribute("data-id"))
        {
          items[k].style.display="block";
        }
        if(target=="all"){
          items[k].style.display="block";
        }
      }
        // console.log(this.getAttribute("data-target"))

    })
  }

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
//
// responsive
// const responsive=[
//   {breakpoint:{width:0, item:1}},
//   {breakpoint:{width:991, item:2}}
// ]




window.onscroll=function(){
  const docScrollTop=document.documentElement.scrollTop;

  if(window.innerWidth>991){
    if (docScrollTop>100){
        document.querySelector("header").classList.add("fixed")
    }
    else{
    document.querySelector("header").classList.remove("fixed")
    }
  }
}


// navbar links
const navbar = document.querySelector(".navbar");
  a=navbar.querySelectorAll("a");

  a.forEach(function(element){
    element.addEventListener("click",function(){
        for(let i=0; i<a.length; i++){
          a[i].classList.remove("active");
        }
      this.classList.add("active")
    })
  })
