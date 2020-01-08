const colorBtn = document.querySelector(".colorBtn");
const bodyBg = document.querySelector("body")


const colors = ["red", "yellow", "green", "blue", "#3b5998"];

colorBtn.addEventListener("click", changeColour);

function changeColour() {

// bodyBg.style.backgroundColor = colors[4]

  let random = Math.floor(Math.random() * colors.length)

  bodyBg.style.backgroundColor = colors[random]

}
