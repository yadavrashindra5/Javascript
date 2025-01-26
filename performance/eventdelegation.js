// document.getElementById('category').addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log('event is clicked')
// })

// document.getElementById('forms').addEventListener('click',(event)=>{
//     console.log(event);
//     if(event.target.dataset.uppercase!=undefined){
//         event.target.value=event.target.value.toUpperCase();
//     }
// })


document.querySelector("#child").addEventListener('click',()=>{
    console.log("child")
})


document.querySelector("#parent").addEventListener('click',()=>{
    console.log("parent")
})

document.querySelector("#grandparent").addEventListener('click',(event)=>{
    console.log("grandparent")
})