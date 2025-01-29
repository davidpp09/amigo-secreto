// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
  let nombreDeAmigo = document.getElementById("amigo").value;
  if (nombreDeAmigo == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombreDeAmigo);
    document.querySelector("#amigo").value = "";
  }
  mostrarLista();
}
function mostrarLista() {
  let elementoHTML = document.querySelector("#listaAmigos");
  elementoHTML.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    var li = document.createElement("li");
    li.innerText = amigos[i];
    elementoHTML.appendChild(li);
  }
}
function sortearAmigo() {
  if (amigos != "") {
    let indice = Math.floor(Math.random() * amigos.length);
    let elementoHTML = document.querySelector("#resultado");
    elementoHTML.innerHTML = `El amigo sorteado es: ${amigos[indice]}`
  } else {
    alert("No hay nombres añadidos");
  }
}
