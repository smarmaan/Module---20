let a = 10;
console.log(typeof a);
console.log(Number.isInteger(a));

let input_array = [20.45276, 25.13215, 5.24564, 100.5447];
console.log(typeof input_array);
console.log(Array.isArray(input_array));
console.log(Number.isInteger(input_array[3]));
console.log(input_array.length);
let total = 0;
for (let i = 0; i < input_array.length; i++) {
  total = total + input_array[i];
  avg_result = total / input_array.length;
}

let avg_result_float = avg_result.toFixed(2);

console.log(parseFloat(avg_result_float));





