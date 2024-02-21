class Person{
    #name;
    #address;
    constructor(name,address){
        this.#name=name;
        this.#address=address;
    }
    setName(name){
        this.#name=name;
    }
    getName(){
        return this.#name;
    }
    setAddress(address){
        this.#address=address;
    }
    #getAddress(address){
        return this.#address;
    }
}

class Student extends Person{
    constructor(name,address){
        super(name,address);
    }
}

class People{
    name;
    address;
    phone;
    constructor(name,address,phone){
        this.name=name;
        this.address=address;
        this.phone=phone;
    }

    getName(){
        console.log(this)
    }
}

const x=new People('rashi','janakpur',9625450512);
// x.getName.call(x);
x.getName();
