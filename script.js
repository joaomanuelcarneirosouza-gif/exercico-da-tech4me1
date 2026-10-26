const alunos = [
  { nome: "Ana",    nota1: 8,   nota2: 9 },
  { nome: "Bruno",  nota1: 4,   nota2: 5 },
  { nome: "Carla",  nota1: 6,   nota2: 7 },
  { nome: "Diego",  nota1: 7,   nota2: 7 },
  { nome: "Elisa",  nota1: 5.5, nota2: 5 },
];

const tabela = document.createElement("table");


const thead = tabela.createTHead();
const trHead = thead.insertRow();
["Aluno", "Nota 1", "Nota 2", "Média"].forEach(titulo => {
  const th = document.createElement("th");
  th.textContent = titulo;
  trHead.appendChild(th);
});


const tbody = tabela.createTBody();
alunos.forEach(aluno => {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  const tr = tbody.insertRow();

  [aluno.nome, aluno.nota1, aluno.nota2, media.toFixed(1)].forEach(valor => {
    const td = tr.insertCell();
    td.textContent = valor;
  });

  if (media < 6) {
    tr.classList.add("reprovado");
  } else if (media >= 7) {
    tr.classList.add("aprovado");
  }
});

document.body.appendChild(tabela);