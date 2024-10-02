//mostrar o ome do mês baseado no numero do mês

const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const mes = prompt("informe o mês")
const numeroMes = Number(mes)

let mensagem = "Mes invalido"

// const mes = Number(prompt("Informe o número do mês"))
// if (mes > 0) {
//     console.log(nomesMeses[mes - 1]);

// } else {
//     console.log("Mes invalido");

// }

if ((numeroMes != NaN) && (numeroMes > 0) && (numeroMes <= 12)) {
    mensagem = `${nomesMeses[numeroMes - 1]} é o mês de número ${numeroMes}`
} else {
    for (let index = 0; index < nomesMeses.length; index++) {
        if (mes.toLowerCase() === nomesMeses[index].toLocaleLowerCase()) {
            mensagem = `${mes} é o mes de número ${index + 1}`
            break
        }

    }
}

console.log(mensagem);
