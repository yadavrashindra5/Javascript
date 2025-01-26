//addEventListener takes three argument first is "event", second is "callback function",third is "useCapture"
//by default useCapture is false which is event bubbling up
//true represent event capturing


//according to w3c first capturing or trickling is happen and then event bubbling is happen
// document.getElementById("grandparent").addEventListener('click',()=>{
//     console.log("Grandparent clicked")
// })

// document.getElementById("parent").addEventListener('click',()=>{
//     console.log("parent clicked")
// })

// document.getElementById("child").addEventListener('click',()=>{
//     console.log("child clicked");
// },true)

// document.getElementById("grandparent").addEventListener('click',()=>{
//     console.log("Grandparent clicked")
// },true)

// document.getElementById("parent").addEventListener('click',()=>{
//     console.log("parent clicked")
// },true)

// document.getElementById("child").addEventListener('click',()=>{
//     console.log("child clicked");
// },true)

document.getElementById("grandparent").addEventListener('click',()=>{
    console.log("Grandparent clicked")
},false)

document.getElementById("parent").addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("parent clicked")
},false)

document.getElementById("child").addEventListener('click',()=>{
    console.log("child clicked");
},false)