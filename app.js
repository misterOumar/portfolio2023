const textAnim = document.querySelector(".textAnim");

new Typewriter(textAnim, {
  loop: true,
  //   strings: ["Salut !"],
  //   autoStart: true,
})

  .typeString(" Oumar")
  .pauseFor(300)
  .typeString(", Dev Front-End !")
  .pauseFor(1000)
  .deleteChars(11)
  .typeString('<strong style="color: aqua;">Web !</strong>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<strong style="color: #2C75D7;">App Mobile !</strong>')
  .start();

const filterContainer = document.querySelector(".project-filter");
const projectBox = document.querySelectorAll(".box");
filterContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter_item")) {
    filterContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const filterValue = e.target.getAttribute("data-filter")
      console.log(filterValue);
      projectBox.forEach((item) => {
          if (item.classList.contains(filterValue) || filterValue === "*") {
            item.classList.remove("hide")
            item.classList.add("show")
          } else {
              item.classList.remove("show")
              item.classList.add("hide")
          }
      })
  }
});
