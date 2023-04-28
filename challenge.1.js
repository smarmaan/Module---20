function make_avg(input_array) {
  let sum = 0;
  for (let i = 0; i < input_array.length; i++) {
    if (Number.isInteger(input_array[i]) !== true) {
      console.log("'",input_array[i],"'","is not a integer number. To continue Please insert a integer number");
    }

    sum = sum + input_array[i];
    avg_sum = sum / input_array.length;
  }
  return parseFloat(avg_sum.toFixed(2));
}

let result = make_avg(["10", 20, 13, 23, 5, 100, 37]);
console.log("The average of the all numbers in the array is : ", result);
