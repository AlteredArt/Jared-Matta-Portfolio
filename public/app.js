// navbar links
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active")
    document.querySelector(".navbar").classList.toggle("show");
  })
})
// nav links

// header scroll
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed")
    }
    else {
      document.querySelector("header").classList.remove("fixed")
    }
  }
}
// header scroll

// ham burger menubar
const menu = document.querySelector(".ham-burger");

menu.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
})
// ham burger menu

// filter buttons
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;


for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active")
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target")

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
      if (target == "all") {
        items[k].style.display = "block";
      }
    }
  })
}
// filter buttons

// lightBox
const closeLightBox = document.querySelector(".close-lightBox");
const lightBox = document.querySelector(".lightBox");
const lightBoxImage = lightBox.querySelector("img");

lightBox.addEventListener("click", function () {
  if (event.target != lightBoxImage) {
    lightBox.classList.remove("show");
    lightBox.classList.add("hide");
  }
})

closeLightBox.addEventListener("click", function () {
  lightBox.classList.remove("show");
  lightBox.classList.add("hide");
})

const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function (element) {
  element.querySelector(".fa-plus").addEventListener("click", function () {
    lightBox.classList.remove("hide");
    lightBox.classList.add("show");
    lightBoxImage.src = element.querySelector("img").getAttribute("src")
  })
})
// lightBox


