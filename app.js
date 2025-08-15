// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre != ''){
        amigos.push(nombre);
        limpiar();
        recorrerAmigos();
        return;
    } else { 
        alert('Por favor, inserte un nombre');
    };
};

function limpiar() {
    document.getElementById('amigo').value = "";
};

function recorrerAmigos(){
    let listadoDeAmigos = document.getElementById('listaAmigos');
    listadoDeAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++){
        const lista = document.createElement("li");
        lista.textContent = amigos[i];
        listadoDeAmigos.appendChild(lista);
    };
};

function sortearAmigo(){
    if (amigos.length > 0){
        let elegidoPosicion = Math.floor(Math.random()*amigos.length);
        let seleccionado = amigos[elegidoPosicion];
        let sorteado = document.getElementById('resultado');
        sorteado.innerHTML = seleccionado;
    };
};
