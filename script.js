let imagemAtual = 1;
const totalImagens = 3;

function mudarImagem(direcao) {
    imagemAtual += direcao;

    if (imagemAtual < 1) {
        imagemAtual = totalImagens;
    } else if (imagemAtual > totalImagens) {
        imagemAtual = 1;
    }

    const caminhoImagem = `imagens/Super-Saiyajin-3 perfil${imagemAtual}.jpg`;
    document.getElementById("fotoPerfil").src = caminhoImagem;
}
