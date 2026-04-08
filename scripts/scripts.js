function validar() {
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if(idade >= 16 && nivel > 5){
        mensagem.innerText = "Inscrição aceita. Categoria PRO";
        mensagem.style.color = "green";
    }else if (idade >=16 && nivel <= 5) {
        mensagem.innerText = "Inscrição aceita. Categoria INICIANTE";
        mensagem.style.color = "blue";
    }else {
        mensagem.innerText = "Inscrição negada. Idade mínimo: 16 anos";
        mensagem.style.color = "red";
    }
}

//Desafio1
function validarSenha() {
    const s1 = document.getElementById("senha1").value;
    const s2 = document.getElementById("senha2").value;
    const msg = document.getElementById("msgSenha");

    if (s1 === s2 && s1.length >= 8) {
        msg.innerText = "Senha válida";
        msg.style.color = "green";
    } else {
        msg.innerText = "Senha inválida — mínimo 8 caracteres e iguais";
        msg.style.color = "red";
    }
}

//Desafio2
function verificarDesconto() {
    const idade = Number(document.getElementById("idadePromo").value);
    const estudante = document.getElementById("estudante").value;
    const msg = document.getElementById("msgPromo");

    if (idade > 60 || estudante === "sim") {
        msg.innerText = "Tem direito ao desconto";
        msg.style.color = "green";
    } else {
        msg.innerText = "Sem desconto";
        msg.style.color = "red";
    }
}

//Desafio3
function verificarBouncer() {
    const nome = document.getElementById("nome").value.trim();
    const idade = Number(document.getElementById("idade").value);
    const msg = document.getElementById("msgBouncer");

    if (nome === "" || idade < 0) {
        msg.innerText = "Erro — nome vazio ou idade negativa";
        msg.style.color = "red";
    } else {
        msg.innerText = "Entrada permitida";
        msg.style.color = "green";
    }
}
