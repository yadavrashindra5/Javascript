let x=5;
let events=new Event("start");
document.addEventListener('start',()=>{
    console.log("start event tiggered")
});

if(x==5){
    document.dispatchEvent(events);
}