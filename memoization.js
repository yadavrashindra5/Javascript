// function resolveAfter2seconds(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(false){
//             resolve("Slow");
//             }
//             else{
//                 reject('failed');
//             }
//         },3000);
//     })
// }

// async function result(){
//     const x=await resolveAfter2seconds();
// }

// result();


/**
 * 
 * Memoization concept
 */

let sum=0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.time();
console.log(calc(5));
console.timeEnd();


const memoize=(callback)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log('cache');
            return cache[n];
        }else{
            console.log('call first time')
            let result=callback(n);
            cache[n]=result;
            return result;
        }
    }
}

const efficient=memoize(calc);
efficient(6);
efficient(6);