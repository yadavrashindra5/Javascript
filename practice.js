// function Person(name) {
//   this.name = name;
//   this.getName = function () {
//     return this.name;
//   };
// }

// Person.prototype.setName = function (name) {
//   this.name = name;
// };

// const x = new Person();
// console.log(x);

function parseTimeRange(timeRange) {
  // Split the string on ' --> ' to separate start and end times
  const [startTime, endTime] = timeRange
    .split(" --> ")
    .map((time) => time.trim());

  // Function to convert time (00:00:00.000) to an object with hours, minutes, seconds, and milliseconds
  function parseTime(time) {
    const [hours, minutes, secondsAndMilliseconds] = time.split(":");
    const [seconds, milliseconds] = secondsAndMilliseconds.split(".");

    return {
      hours: parseInt(hours, 10),
      minutes: parseInt(minutes, 10),
      seconds: parseInt(seconds, 10),
      milliseconds: parseInt(milliseconds, 10),
    };
  }

  // Parse the start and end times
  const start = parseTime(startTime);
  const end = parseTime(endTime);

  return {
    start,
    end,
  };
}

// Example usage
const timeRange = "00:00:00.000 --> 00:00:04.200";
const parsedTimeRange = parseTimeRange(timeRange);
console.log(parsedTimeRange);
