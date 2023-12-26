
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


/* Função  para redireciona com  clica do  botão para pagina Ifrn*/
function redirecionarParaIFRN() {
    window.location.href = "ifrn.html";
  }
  /* Função  para redireciona com  clica do  botão para pagina index*/
  function redirecionarParaIndex() {
    window.location.href = "index.html";
  }
  /* pagian ifrn*/
  
  /*Botão  do carrosel de imagens */
  var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    initialSlide: 0, 
  });

  /*Botão  revelar texto */
  function toggleTexto(paragrafoId, botaoRevelarId, botaoOcultarId) {
    var paragrafo = document.getElementById(paragrafoId);
    var botaoRevelar = document.getElementById(botaoRevelarId);
    var botaoOcultar = document.getElementById(botaoOcultarId);

    if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
        paragrafo.style.display = 'block';
        botaoRevelar.style.display = 'none';
        botaoOcultar.style.display = 'inline-block';
    } else {
        paragrafo.style.display = 'none';
        botaoRevelar.style.display = 'inline-block';
        botaoOcultar.style.display = 'none';
    }
}