var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

let arrayProjetos = [
  {
    nome: "Tik Tak Toe",
    descricao:
      "Tik Tak Toe desenvolvido com HTML, CSS e JS para praticar Arrays",
    link: "https://www.langetsu.com.br/tiktaktoe/",
    imagem: "./Home/projetos/tiktaktoe.png",
  },
  {
    nome: "Jogo da Memoria",
    descricao:
      "Jogo da memoria desenvolvido com HTML, CSS e JS para praticar Arrays e controle do DOM",
    link: "https://www.langetsu.com.br/jogodamemoria/",
    imagem: "./Home/projetos/jogodamemoria.png",
  },
  {
    nome: "Dolar Hoje",
    descricao:
      "Página que mostra a cotação do dolar hoje com base em dados fornecidos de uma API",
    link: "https://www.langetsu.com.br/dolarhoje/",
    imagem: "./Home/projetos/dolarhoje.png",
  },
  {
    nome: "Timer",
    descricao:
      "Timer feito para praticar funções de tempo, como setInterval, setTimeout e clearTimeout ",
    link: "https://www.langetsu.com.br/timer/",
    imagem: "./Home/projetos/timer.png",
  },
  {
    nome: "Página de Conversão",
    descricao: "Página de conversão integrada ao MailChimp",
    link: "https://www.langetsu.com.br/paginadeconversao/",
    imagem: "./Home/projetos/paginadeconversao.png",
  },
  {
    nome: "To Do List",
    descricao: "To Do List feita para treinar JavaScript e controle de DOM",
    link: "https://www.langetsu.com.br/todolist/",
    imagem: "./Home/projetos/todolist.png",
  },
  {
    nome: "On.We",
    descricao:
      "Website desenvolvido para a empresa On.We, feito com Wordpress + Elementor",
    link: "https://onwe.com.br",
    imagem: "./Home/projetos/onwe.png",
  },
  {
    nome: "Renovar Digital",
    descricao:
      "Website desenvolvido para a empresa Renovar Digital, feito com Wordpress + Elementor",
    link: "https://renovardigital.com",
    imagem: "./Home/projetos/renovardigital.png",
  },
];

arrayProjetos.forEach((projetos) => {
  let container = document.getElementById("container-cards");
  container.innerHTML += `   <div class="card w-100 rounded-15 offwhite-web p-3 m-2">
        <img src="${projetos.imagem}"class="card-img-top rounded-15"/>
        <div class="card-body">
          <h2 class="card-title">${projetos.nome}</h2>
          <h3 class="c-red fs-18">Projetos</h3>
          <p class="card-text">${projetos.descricao}</p>
          <a href=${projetos.link}><button class="btn-cards">Visualizar</button></a>
        </div>
      </div>`;
});
