const nomes = [];
const telefones = [];
const emails = [];

let linhas = "";

forms.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome");
  const telefone = document.getElementById("telefone");
  const email = document.getElementById("email");

  if (
    nomes.includes(nome.value) &&
    telefones.includes(telefone.value) &&
    emails.includes(email.value)
  ) {
    alert("O contato ja foi inserido");
  } else {
    nomes.push(nome.value);
    telefones.push(telefone.value);
    emails.push(email.value);

    let linha = "<tr>";
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `<td><a href="https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=new">${email.value}</a></td>`;
    linha += "</tr>";
    linhas += linha;
    console.log(linhas);
    atualizatabela();

    nome.value = "";
    telefone.value = "";
    email.value = "";
  }
});

function atualizatabela() {
  const corpoTabela = (document.querySelector("tbody").innerHTML = linhas);
}
