function odd_even(value) {
  if (typeof value === "number" && Number.isInteger) {
    if (value % 2 == 0) {
      console.log(value, "is an EVEN Number.");
    } else {
      console.log(value, "is an ODD Number.");
    }
  } else {
    console.log("Please input a Integer Number.");
  }
  //   return console.log("Please input a Integer Number");
}

let a = odd_even(11);
