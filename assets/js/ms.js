document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector("#cart");
    const cartMenu = document.querySelector(".carrinho");
    const loginIcon = document.querySelector("#login");
    const loginForm = document.querySelector(".login-form");

    // Toggle para o carrinho
    cartIcon.onclick = () => {
        cartMenu.classList.toggle("active");
        loginForm.classList.remove("active"); // Fechar o login ao abrir o carrinho
    };

    // Toggle para o formulário de login
    loginIcon.onclick = () => {
        loginForm.classList.toggle("active");
        cartMenu.classList.remove("active"); // Fechar o carrinho ao abrir o login
    };
});

var swiper = new Swiper(".home-slider",{
    // Navigation arrows
  autoplay:{
    delay: 2500,
    disableOnInteraction: false,
  },
  grapCursor: true,
  loop:true,  
  centeredSliders:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
})

var swiper = new Swiper(".menu-slider",{
grapCursor: true,
loop:true,  
autoHeight:true,
centeredSliders:true,
spaceBetwwen:20,
pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
})

/** JANELA MODAL PROJETO */
let verModalCorpo = document.querySelector(".menu-modal-container");
let verModalBox = verModalCorpo.querySelector(".menu-modal");


document.querySelectorAll(".menu .box").forEach(menu =>{

  menu.onclick = () => {
    verModalCorpo.style.display = "flex" ;
    let nome = menu.getAttribute('data-name')

    verModalCorpo.forEach(visualizar => {
      let chamada = visualizar.getAttribute('data-target');
      if (nome == chamada){
        visualizar.classList.add('active')
      }
    });

  };

});


verModalCorpo.querySelector("#fechar").onclick = () => {
  verModalCorpo.style.display = 'none';
  verModalBox.forEach(fechar => {
    fechar.classList.remover('active');
  });
};