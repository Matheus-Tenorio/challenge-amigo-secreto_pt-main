//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigos = [];

function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo').value;

    if (nomeDigitado == "") {
        alert('Digite um nome válido');
        return;
    }

    nomeAmigos.push(nomeDigitado);

    document.getElementById('amigo').value = "";

    atualizarListaAmigos();

    console.log(nomeAmigos);
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < nomeAmigos.length; i++) {
        lista.innerHTML += `<li>${nomeAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    
    if (nomeAmigos.length == 0) {
        alert('Não exista nomes para sortear');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nomeAmigos.length);
    const amigoSorteado = nomeAmigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}