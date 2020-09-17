const sayHello = function(name){
 console.log("Hello, " + name);
 }
 
 sayHello('Lesley');
  sayHello('Miranda');
   sayHello('Caliban');
   
   const returnSayHello = function(name){
 return "Hello, " + name;
 }
 const greeting = returnSayHello('Bob');
 console.log(greeting);
 
