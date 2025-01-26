//creating custom event with Event constructor
const eventx = new Event("event");

document.getElementById("hello").addEventListener("event", () => {
  console.log("Hello");
});

setTimeout(() => {
  document.getElementById("hello").dispatchEvent(eventx);
}, 5000);

//creating custom event with CustomEvent

const myEvent = new CustomEvent("myevent", {
  detail: {},
  bubbles: true,
  cancelable: true,
  composed: false,
});
// document.querySelector("#someElement").dispatchEvent(myEvent);

document.addEventListener("myevent", (event) => {
  console.log(event);
});

// setInterval(() => {
//   document.dispatchEvent(myEvent);
// }, 2000);
