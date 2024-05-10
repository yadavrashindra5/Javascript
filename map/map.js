const subject = {
  physics: "kkk",
  chemistry: "hjk",
};

const obj = {
  name: "rashindra",
  address: "Janakpur",
  subject: subject,
};

subject.obj = obj;

const obj1 = {
  subject,
  obj,
};

const map = new Map();

function destroyObject(obj) {
  if (obj) {
    if (typeof obj == "object") {
      if (Array.isArray(obj)) {
        console.log("is array");
      } else {
        for (let key in obj) {
          if (map.has(key)) {
            obj[key] = undefined;
          } else {
            map.set(key, obj[key]);
            obj[key] = destroyObject(obj[key]);
          }
        }
      }
    } else {
      obj = undefined;

      return obj;
    }
  } else {
    return undefined;
  }
  obj = undefined;
  return undefined;
}

let objx = { name: "rashindra", address: "janakpur" };
objx = destroyObject(obj1);
console.log(objx);
console.log(map);
