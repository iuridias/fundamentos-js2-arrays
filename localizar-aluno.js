const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
    return listaDeNotasEAlunos[0][indice] + `, sua média é ${listaDeNotasEAlunos[1][indice]}`;
  } else {
    return `Nome do aluno não encontrado!`
  }
}

console.log(exibeNomeNota('Caio'));