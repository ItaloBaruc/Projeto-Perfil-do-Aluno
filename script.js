document.addEventListener("DOMContentLoaded", function () {
    let imagemAtual = 1;
    const totalImagens = 3;

    window.mudarImagem = function (direcao) {
        imagemAtual += direcao;
        if (imagemAtual < 1) imagemAtual = totalImagens;
        if (imagemAtual > totalImagens) imagemAtual = 1;

        const caminhoImagem = `super-saiyajin3-perfil${imagemAtual}.jpg`;
        document.getElementById("fotoPerfil").src = caminhoImagem;
    };

    window.adicionarUC = function () {
        const novaUC = prompt("Digite o nome da nova UC:");
        if (novaUC) {
            const li = document.createElement("li");
            li.innerHTML = `${novaUC} <button onclick="mover(this, -1)">↑</button> <button onclick="mover(this, 1)">↓</button>`;
            document.getElementById("listaUCs").appendChild(li);
        }
    };

    window.mover = function (botao, direcao) {
        const li = botao.parentElement;
        const lista = li.parentElement;
        if (direcao === -1 && li.previousElementSibling) {
            lista.insertBefore(li, li.previousElementSibling);
        } else if (direcao === 1 && li.nextElementSibling) {
            lista.insertBefore(li.nextElementSibling, li);
        }
    };

    window.validarCPF = function () {
        const cpf = document.getElementById("cpf").value;
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!regex.test(cpf)) {
            alert("CPF inválido. Formato correto: ddd.ddd.ddd-dd");
        }
    };

    window.validarEmail = function () {
        const email = document.getElementById("email").value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            alert("E-mail inválido. Exemplo: nome@dominio.com");
        }
    };

    window.adicionarDescricao = function () {
        const texto = document.getElementById("novaDescricao").value.trim();
        if (texto) {
            const p = document.getElementById("perfilPessoal");
            p.innerHTML += " " + texto;
            document.getElementById("novaDescricao").value = "";
        }
    };
});
