var x = [];

function grow() {
  x.push(new Array(1000000).join("x"));
}

document.getElementById("grow").addEventListener("click", grow);

const str = `dslkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjldssssssssssssssssssssssssssssssssssssssdskl
sdkfjskllllllllllllllllllllllllllllllllllllllllllkjsdfffffffffffkjjjjjjjjjjjjjjjjjjjjjjjlkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
dksljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
ldskjfffffffffffffffffffffffff
sdlkjffffffffffffffffff`;
console.log(str);
