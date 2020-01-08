const button = document.querySelector("button");
const body = document.querySelector("body")

button.addEventListener("click", changeColour);

function changeColour(e) {
  const colors = ["red", "yellow", "green", "blue"];

  // colors.forEach((color)=>{
  //   color = colors.shift()

  //   body.style.backgroundColor = color
  //   console.log(color);
  // })

  // colors.forEach((color, index) =>{
  //   if(body.style.backgroundColor !== color) {
  //     console.log(colors.splice(index));
  //     document.body.style.backgroundColor = color
  //   }
  // })

  // for (i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
  //   document.body.style.backgroundColor = colors[i];
  // }

  console.log("Button clicked.");
}
