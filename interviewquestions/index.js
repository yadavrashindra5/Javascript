const obj={};

const something=(value)=>{
if(!obj.current){
obj.current=()=>{
console.log(value);
}
}
return obj.current;
}


const x=something('first');
const y=something('second');
const z=something('third');
 
 x();
console.log(obj);
y();