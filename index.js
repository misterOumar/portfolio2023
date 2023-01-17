//  ********************************  Début Scroll progressive  ***********************
const scrollProgress = document.querySelector("#progress");

document.addEventListener("scroll", () => {
  const totalHeight = document.body.scrollHeight;
  const distanceTop = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;

  const pourcentageScroll = (distanceTop / (totalHeight - windowHeight)) * 100;

  scrollProgress.style.width = Math.round(pourcentageScroll) + "%";
});
//  *****************   Fin Scroll progressive    ***************************

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
// active link
const li = document.querySelectorAll(".links");
const section = document.querySelectorAll("section")
function activeLink() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) { }
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeLink();
window.addEventListener("scroll",activeLink)

window.addEventListener("scroll", () => {
  const ancre = document.querySelector(".ancre");
  if (scrollY > 800) {
    ancre.classList.add("active");
  } else {
    ancre.classList.remove("active");
  }
});

const sr = ScrollReveal({
  duration: "2000",
  reset: true,
  distance: "100px",
});
sr.reveal(".textBx", {
  origin: "top",
  scale: "0.8",
});
sr.reveal(".btn", {
  origin: "left",
  scale: "0.5",
  delay: "200",
  duration: "1000px",
});
sr.reveal(
  ".servicesBx",
  {
    origin: "top",
    distance: "50px",
  },
  500
);
