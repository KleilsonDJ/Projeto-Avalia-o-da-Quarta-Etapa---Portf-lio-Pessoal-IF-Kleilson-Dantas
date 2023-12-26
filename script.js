
var typed = new Typed("#typed", {
    strings: ["KLEILSON DANTAS.", "web Developer.", "UX Designer.", "Photographer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
/* Função para a barra de pesquisa Redirecionar para as páginas relevantes com base no valor de entrada.  */
function pesquisarERedirecionarCabecario() {
        var searchInput = document.getElementById("search").value.toLowerCase();

        if (searchInput.includes("home")) {
            window.location.href = "index.html";
        } else if (searchInput.includes("ifrn")) {
            window.location.href = "Ifrn.html";
        } else {
            alert("Página não encontrada para o termo de pesquisa: " + searchInput);
        }

        return false; 
    }

/* Pagina index*/

/*Função para o Botão ler mais e ler menos */
function toggleTexto(paragrafoId, listaId, botaoRevelarId, botaoOcultarId) {
    var paragrafo = document.getElementById(paragrafoId);
    var lista = document.getElementById(listaId);
    var botaoRevelar = document.getElementById(botaoRevelarId);
    var botaoOcultar = document.getElementById(botaoOcultarId);

    if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
        paragrafo.style.display = 'block';
        lista.style.display = 'block';
        botaoRevelar.style.display = 'none';
        botaoOcultar.style.display = 'inline-block';
    } else {
        paragrafo.style.display = 'none';
        lista.style.display = 'none';
        botaoRevelar.style.display = 'inline-block';
        botaoOcultar.style.display = 'none';
    }
}
/* Função  para redireciona com  clica do  botão para pagina Ifrn*/
function redirecionarParaIFRN() {
    window.location.href = "ifrn.html";
  }
  /* Função  para redireciona com  clica do  botão para pagina index*/
  function redirecionarParaIndex() {
    window.location.href = "index.html";
  }
 