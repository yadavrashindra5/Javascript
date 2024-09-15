//shallow copy reflect both the reference
const obj1={
    name:'rashindra',
    subject:{
        name:'math'
    }
}
const obj=obj1;
obj.name='rashi';
console.log(obj)

//this is deep copy one level this deep copy doesn't work for second level

const obj2={
    name:'rashindra',
    subject:{
        name:'math'
    }
}

const obj3={...obj2};
obj3.name='somnath';
console.log(obj3,'obj3')
console.log(obj2,'obj2');

//deep copy for second level

const obj4={
    ...obj2,subject:{...obj2.subject}
}

obj4.subject.name='science';
console.log(obj4);