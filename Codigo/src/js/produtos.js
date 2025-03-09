document.addEventListener("DOMContentLoaded", function () {
    const miniaturas = document.querySelectorAll("#selecionar-imagem input");
    const imagemPrincipal = document.querySelector("#visualizacao img");

    miniaturas.forEach((miniatura) => {
        miniatura.addEventListener("change", function () {
            const idMiniatura = this.id.replace("-imagem", "-imagem-miniatura");
            const novaSrc = document.getElementById(idMiniatura).src;
            imagemPrincipal.src = novaSrc;
        });
    });
});
