function foo() {
  console.log("Foo");
  bar();
}

function bar() {
  console.log("Bar");
}

// foo(bar());
foo();
