// Arrays de elementos para la excusa
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// Función para generar un número aleatorio basado en la longitud del array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Función para generar una excusa
function generateExcuse() {
  let randomWho = who[getRandomIndex(who)];
  let randomAction = action[getRandomIndex(action)];
  let randomWhat = what[getRandomIndex(what)];
  let randomWhen = when[getRandomIndex(when)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

// Evento onload para mostrar la excusa al cargar la página
window.onload = function () {
  let excuseElement = document.getElementById('excuse');
  excuseElement.innerHTML = generateExcuse();
};
