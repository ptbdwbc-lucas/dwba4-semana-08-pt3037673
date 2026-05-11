// Classe Aluno
class Aluno {

    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    // Método para retornar nome completo
    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    // Método para calcular média
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    // Método para verificar situação
    situacao() {
        if (this.media() > 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}


// Array com 5 objetos Aluno
let alunos = [

    new Aluno("João", "Silva", 7, 8.5),

    new Aluno("Maria", "Oliveira", 9, 7),

    new Aluno("Carlos", "Souza", 5, 6),

    new Aluno("Ana", "Costa", 8, 9),

    new Aluno("Pedro", "Santos", 4, 5)

];


// Função para percorrer o array e mostrar os dados
function mostrarAlunos() {

    for (let i = 0; i < alunos.length; i++) {

        alert(
            "Nome: " + alunos[i].nomeCompleto() +
            "\nMédia: " + alunos[i].media().toFixed(2) +
            "\nSituação: " + alunos[i].situacao()
        );

    }

}


// Executa a função
mostrarAlunos();