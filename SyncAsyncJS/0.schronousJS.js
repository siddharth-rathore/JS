let helloWorld = () => {
  console.log("Hello World");
};

let greetings = () => {
  console.log("Good Morning");
  helloWorld();
  console.log("Have a good day!");
};

greetings();
