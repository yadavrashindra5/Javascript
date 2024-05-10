const keydown = () => {
  console.log("keydown");
};

const keyup = () => {
  console.log("keyup");
};

const keypress = () => {
  console.log("keypress");
};

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
document.addEventListener("keypress", keypress);
