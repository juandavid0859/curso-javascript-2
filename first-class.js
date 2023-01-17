const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input')

console.log({
h1,
p,
parrafito,
pid,
input,
});

h1.innerHTML = 'juancho';
// cambia el html original y pone lo que yo quiera

h1.innerText = 'texto aqui';
// pone solo texto

// h1.getAttribute('verde');
// h1.setAttribute('verde', 'rojo');

// h1.classList.add('rojo') //agrega una clase
// h1.classList.remove('verde') //remueve una lista
// .toggle
// .containas
// // otras clases

input.value = 456

// document.createElement('img');

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/5015429/pexels-photo-5015429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

pid.innerHTML = "";
pid.appendChild(img);
