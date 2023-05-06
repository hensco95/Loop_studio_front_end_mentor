let showBtn = document.querySelector(".show_nav");
let closeBtn = document.querySelector(".close_btn");
let aside = document.querySelector(".side_nav")

showBtn.addEventListener("click", () => {
  aside.classList.add("display_nav")
})

closeBtn.addEventListener("click", () => {
  aside.classList.remove("display_nav");
})