// async function delayAndLog() {
//     console.log('Start');
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 2 seconds
//     console.log('End');
//   }
  
//   delayAndLog();


const promise1 = new Promise((resolve, reject) => {
  for (let i=0; i<1; i++) {
    console.log(i)
  }
  if (Math.random() < 0.5) {
    reject()
  } else {
    resolve()
  }
})

console.log('before then handler');

function main() {
   promise1.then(function secondThen() {
    console.log('inside then inside main');
  }, function secondCatch() {
    console.log('inside then inside main rejected')
  })
  promise1.then(function meranaamjoker() {
  console.log('xyz');
},function  firstCatch() {
  console.log('ye kya ho gya');
}
)
  
 
}

main();