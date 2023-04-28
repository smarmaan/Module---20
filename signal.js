var signal = "green";
if (signal === "red") {
  console.log("Please wait for a bit. until the signal gets green");
} else if (signal === "yellow") {
  console.log(
    "Please wait a little longer. the signal will be green in few seconds. Be Ready..."
  );
} else {
  console.log("You may Go now.. Have a safe journey.");
}

let signal_2 = "yellow";
switch (signal_2) {
  case "red":
    console.log("Please wait for a bit. until the signal gets green");
    break;

  case "yellow":
    console.log("The signal will be green in few seconds. Be Ready");
    break;

  default:
    console.log("You may Go now.. Have a safe journey.");
}
