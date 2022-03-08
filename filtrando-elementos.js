const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 4];

//const reprovados = nomes.filter((aluno, indice) => notas[indice] < 5);
const reprovados = nomes.filter((_, indice) => notas[indice] < 5); //Indica que o parâmetro não será utilizado durante o código. Ou seja _ no lugar de aluno.

console.log(`Reprovados: ${reprovados}`);