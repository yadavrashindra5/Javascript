const worker = new Worker("worker.js");

worker.postMessage("Hello world");

worker.onmessage = function (e) {
  console.log("main js", e.data);
};

