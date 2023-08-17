let linhas = "";

forms.addEventListener("submit", function (e) {
  e.preventDefault();
  atualizatabela();

  const nome = document.getElementById("nome");
  const telefone = document.getElementById("telefone");
  const email = document.getElementById("email");

  let linha = "<tr>";
  linha += `<td>${nome.value}</td>`;
  linha += `<td>${telefone.value}</td>`;
  linha += `<td>${email.value}</td>`;
  linha += "</tr>";
  linhas += linha;
});

function atualizatabela() {
  const corpoTabela = (document.querySelector("tbody").innerHTML = linhas);
}
