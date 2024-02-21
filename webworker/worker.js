// self.addEventListener("message", (e) => {
//   console.log("HI How are your", e.data);
// });
onmessage = function (e) {
  console.log("HI How are your", e);
};

self.postMessage("I completed the task");
