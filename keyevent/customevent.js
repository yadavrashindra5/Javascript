let x = 5;
let events = new Event("start");
document.addEventListener("start", () => {
  console.log("start event tiggered");
});

if (x == 5) {
  document.dispatchEvent(events);
}

let customEvent = new CustomEvent("build", { detail: "rashindra" });

function eventHandler(e) {
  console.log("event handler", e.detail);
}

document.addEventListener("build", eventHandler);

document.dispatchEvent(customEvent);
