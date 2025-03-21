![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png  "logotipo de The Bridge")

# :european_castle: :crossed_swords: Bikram #

## Introducción ##
Un bikram es una combinación de ejercicios de programación para perfeccionar la conexión entre el programador interior que llevas dentro y el alma del lenguaje de programación. Aprovecha los checkboxes en el enunciado para ir marcando que ejercicios llevas realizados.

Estas pruebas cubren un espectro de dificultad incremental, dotada de tests que cubrirán la correcta resolución para ayudarte a encontrar posibles errores en tu código.

La soluciones a los bikrams deberán hacerse en **./index.js** y tienen que subirse a GitHub, además, deberá incluirse una captura de pantalla de los tests.

En esta ocasión, el bikram se dividirá en :crossed_swords: Pair Programming :crossed_swords: y :european_castle: proyecto individual :european_castle:

## Iteraciones :crossed_swords: Pair Programming :crossed_swords: ##

(Abre index.html para ver el resultado de los tests)

### Map ###

- [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que devuelva un array con el cuadrado de cada uno de los elementos.

- [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
```
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
```

### Filter ###

- [ ] 3.- Crea un segundo array que contenga solo los los impares 

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

- [ ] 4.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
```
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

// Resultado esperado
/*
  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/
```


- [ ] 5.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

```

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung,
    price: 459
  },
  {
    name: 'Viaje a cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/
```

### Reduce ###

- [ ] 6.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

- [ ] 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
```
const sentenceElements = [
  'Me',
  'llamo',
  /* Tu nombre aqui! */,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

```

- [ ] 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
```
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

```

