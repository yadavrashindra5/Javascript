//local storage have key(),setItem(),getItem(),removeItem(),clear() methods
//local storage can store only string so, if we want to store array,object or any other data type other than string than we have to convert that data into string using json.stringify() and when retrive data we parse that data using json.parse()
function store(e) {
  console.log("store", e);
  //stores items in the localStorage
  //   var brand = document.getElementById("carBrand").value;
  //   var price = document.getElementById("carPrice").value;
  //   var key = document.getElementById("key").value; //gets the key from the user

  //   const car = {
  //     brand: brand,
  //     price: price,
  //   };

  //   window.localStorage.setItem(key, JSON.stringify(car));
  //converting object to string
}
