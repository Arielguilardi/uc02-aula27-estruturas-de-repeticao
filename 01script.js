//while
//do/while
//for

// Crie uma lista com cinco nomes usando um while
//enquanto (condição verdadeira) faça alguma coisa


let numeroDeVezes = 0
while (numeroDeVezes < 5) {
    console.log("Passou aqui")
    numeroDeVezes = numeroDeVezes + 1
}



//lista, array, vetor, matriz
//lista, array ou vetor
let lista = ['banana', 'maça', 'kiwi', 'morangos', 'laranja']
//OU matriz
// let listaDeListas = [
//     ['banana', 'maça', 'kiwi', 'morangos', 'laranja'],
//     ['banana', 'maça', 'kiwi', 'morangos', 'laranja'],
//     ['banana', 'maça', 'kiwi', 'morangos', 'laranja']
// ]
let posicao = 0

const listaEmTela = document.createElement("ol")

while (posicao < 5) {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmTela.appendChild(itemLista)
    posicao = posicao + 1
}

document.body.appendChild(listaEmTela)

posicao = 0
const listaEmTelaDo = document.createElement("ol")

do {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmTela.appendChild(itemLista)
    posicao = posicao + 1
} while (posicao < 5);

document.body.appendChild(listaEmTela)


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    break;

}