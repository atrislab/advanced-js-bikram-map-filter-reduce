//RESUELVE LOS EJERCICIOS AQUI
/*
1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], 
crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.
*/

/*

let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {return numbers.map(x => x ** x);};
console.log(elevados);

*/

/*
2.- Dado el array foodList con valor 
['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
generar un segundo array que consiga generar de salida el resultado esperado.

[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
*/

/*Esta troleada valida

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let result2 = [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
];
console.log(result2);
*/
//Dicen que usando un operador ternario también sale:
/*
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const result2 = foodList.map((value) => 

    value == 'Pizza'? 'Como soy de Italia, amo comer Pizza'
    :value == 'Ramen'? 'Como soy de Japón, amo comer Ramen'
    :value == 'Paella'?'Como soy de Valencia, amo comer Paella'
    :value == 'Entrecot'?'Aunque no como carne, el Entrecot es sabroso'
    :"Error"
)

console.log(result2);
//*/
/*
3.- Crea un segundo array que contenga solo los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
*/

/*
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter(n => n%2);
console.log(result4);
//*/

/*
4.- Dado el array staff, 
crear un segundo array que forme frases como en el ejemplo 
accediendo a las propiedades del objeto proporcionado:

Resultado esperado:

  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/
/*
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

let result3 = staff.map(person =>
   `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`);

console.log(result3);
///*
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const resultN = staff.map((person) => {
  return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`;
});

console.log(resultN);

*/

/*
5.- Dado el array inventory, 
devolver un array con los nombres de los elementos que valgan más de 300 euros.
*/

/*

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
 
const result5 = inventory
                      .filter(element => element.price > 300)
                      .map(element => element.name);
console.log(result5);

//*/

/*
6.- Dado el siguiente array numeros
[39, 2, 4, 25, 62], 
obten la multiplicación de todos los elementos del array
*/

/*
let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((a, b)=> a*b, 1);
console.log(result7);
//*/

/*
7.- Concatena todos los elementos del array con reduce 
para que devuelva una sola frase
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
*/
/*
const sentenceElements = [
  'Me',
  'llamo',
  'Atris',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

const result9 = sentenceElements.reduce((accumulator, currentValue) => {
  return `${accumulator} ${currentValue}`;
});

console.log(result9);
//*/

/*
8.- Obtener el monto total de los elementos que 
pertenecen a catergory "code" en el siguiente array.
*/

/*
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

// Resultado --> 60

const result9 = books
                    .filter(items => items.category == 'code')
                    // .map(items => items.price)
                    .reduce((acc, currentV) => acc += currentV.price, 0);
console.log(result9);
//*/
