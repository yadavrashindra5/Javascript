# Shallow Copy
1. A shallow copy copies only the first level of the object or array.
2. If the original contains nested objects or arrays, only their references are copied - not their values.

# What are the way to make shallow copy
There are two way to make shallow copy
1. using the spread operator
2. using Object method that is ```Object.assign({},obj)```


# Shallow Copy Example
```
const s1 = {
    name: "rashindra",
    address: {
        permanent: "Delhi",
        temporary: "Gurugram"
    }
};

// We are creating a shallow copy of s1
const s2 = { ...s1 };

// Changing the name property in s2
s2.name = "kumar";
// This change will NOT affect s1 because 'name' is a primitive (string) and was copied by value.

// Modifying the nested object
s2.address.permanent = "Rajasthan";
// This change WILL affect both s1 and s2 because 'address' is an object,
// and in a shallow copy, nested objects are copied by reference.

```

Note:-
In a shallow copy, nested objects are not cloned, they are referenced, so both s1 and s2 share the same address object.



# Deep Copy
A deep copy creates a completely independent clone, including all nested levels.


# What are the way to make deep copy
1. ```structuredClone()``` - modern and reliable
```const deepCopy=structuredClone(obj);```

2. ```JSON.parse(JSON.stringify(obj))```- works for simple objects but fails with
    - undefined
    - function
    - Symbol
    - circular references

Note:- Here, you have to consider that you will ```not be able to copy custom class instances```, so you can only use it when you copy objects with native JavaScript values inside.

3. Libraries like lodash:
```const deepCopy=_.cloneDeep(obj);```