const pessoa = {
  name: "Elton",
  age: 26
};

const { age: idade } = pessoa;

console.log(idade);


const fruits = ["banana", "pera", "uva"];

const [b, ...rest] = fruits;


console.log(b);

console.log(rest);