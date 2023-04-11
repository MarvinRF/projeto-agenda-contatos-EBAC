
const form = document.getElementById('dados');
const contatos = [];
const telefones = [];
const email = [];
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
});


function adicionaLinha() {
    const nome = document.getElementById('contato');
    const numero = document.getElementById('telefone');
    const emails = document.getElementById('e-mail');

    if(telefones.includes(numero.value)){
        alert(`O Número ${numero.value} Já foi cadastrado`)
    }
    else if(email.includes(emails.value)) {
        alert(`O E-mail ${emails.value} Já foi cadastrado`)
    }
    else{
    contatos.push(nome.value);
    telefones.push(numero.value);
    email.push(emails.value);

    let linha = '<tr>';
    linha += `<td> ${nome.value}</td>`;
    linha += `<td> ${numero.value}</td>`;
    linha += `<td> ${emails.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    }

    nome.value = '';
    numero.value = '';
    emails.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
