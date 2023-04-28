function make_avg(num1, num2, num3) {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }

  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }

  if (typeof num3 === "string") {
    num3 = parseInt(num3);
  }

  if (
    typeof num1 === "number" &&
    Number.isInteger(num1)  &&
    typeof num2 === "number" &&
    Number.isInteger(num2)  &&
    typeof num3 === "number" &&
    Number.isInteger(num3) 
  ) {
    let sum = 0;
    sum = num1 + num2 + num3;
    console.log("The value of Number 1 : ", num1);
    console.log("The value of Number 2 : ", num2);
    console.log("The value of Number 3 : ", num3);
    console.log("The sum of three numbers is : ", sum);
    avg0fSum = sum / 3;
    console.log("The average of three numbers is : ", avg0fSum);
  } else {
    console.log("All values must be an integer number");
  }
}

make_avg(100, 20, 0);
