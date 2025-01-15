//NAVIGATION LINKS
const nav = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".nav-links")
// console.log(nav)
// console.log(navLinks)
nav.addEventListener("click", function(e) {
  
})

// NAVIAGTION MENU TOGGLE
const btnToggle = document.querySelector(".btn-toggle");
const navBtn = document.getElementById("navBtn")

btnToggle.addEventListener("click", function () {
  if (navBtn.classList.contains("fa-bars")) {
    navBtn.classList.replace("fa-bars","fa-xmark")    
  } else {
    navBtn.classList.replace("fa-xmark","fa-bars")    
  }
  nav.classList.toggle("hidden");
});

//BLOG TABS
const blogList = document.querySelector(".blog-list");
const blogItem = document.querySelectorAll(".blog-item");
const blogSvg = document.querySelectorAll(".blog-item svg");

for (let i = 0; i < blogItem.length; i++) {
  blogItem[i].addEventListener("click", function () {
    if (blogItem[i].classList.contains("active")) {
        blogItem[i].classList.toggle("active")
        blogSvg[i].classList.toggle("active")
    }
  });
}

// FAQ ANSWER
const question = document.querySelectorAll(".faq-item");
const answer = document.querySelectorAll(".answer");
const faqBtn = document.querySelectorAll(".faq-btn svg");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    const isActive = answer[i].classList.contains("active");

    answer.forEach((answer) => {answer.classList.remove("active")})
    faqBtn.forEach((btn) => {btn.classList.remove("active")})
    if (!isActive) {
      answer[i].classList.add("active");
      faqBtn[i].classList.add("active");
    }
  });
}
