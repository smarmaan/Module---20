console.log("====================================================================");
console.log("================= Property name and value show up ==================");
// let a = "Deadpool";
// let b = true;
// const c = 27;
// b = true;
// console.log(a, b, c);

const shoppingCart = {
  books: 3,
  color: ["yellow", "blue", "orange"],
  sunglass: 4,
  pen: 26,
  Keyboard: 6,
  numbers: [2, 5, 7, 9, 6, 1],
};

let properties = Object.keys(shoppingCart);
// console.log(properties);

// let propertiesValue = Object.values(shoppingCart);
// console.log(propertiesValue);

// let property_name = "books";
// let property_value = shoppingCart[property_name];
// console.log(property_name, property_value);

for (let list in shoppingCart) {
  let values = shoppingCart[list];
  console.log(list, ":", values);
}
console.log("================================================");
console.log("================================================");
for (let i = 0; i < properties.length; i++) {
  const element = properties[i];
  console.log(element, ":", shoppingCart[element]);
}



