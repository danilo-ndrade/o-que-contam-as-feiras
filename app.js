const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const titulo = document.querySelector('.titulo');

image1.addEventListener('click', () => {
    image2.style.display = 'block'; 
    image1.style.display = 'none'; 
})

image2.addEventListener('click', () => {
    image2.style.display = 'none'; 
    image1.style.display = 'block'; 
})


/*NAV MENU TOGGLE*/ 
const openMenuButton = document.querySelector('.menu-btn');
const navMenuContainer = document.querySelector('.menu-container');
const closeMenuButton = document.querySelector('.close-btn');

openMenuButton.addEventListener('click', () => {
    navMenuContainer.style.display = 'block';
})

closeMenuButton.addEventListener('click', () => {
    navMenuContainer.style.display = 'none';
})


const aboutButton = document.querySelector('.about-btn');
const aboutText = document.querySelector('.about-text');
aboutText.style.display = 'none';

aboutButton.addEventListener('click', () => {
    if(aboutText.style.display == 'none') {
        aboutText.style.display = 'flex';
    }else {
        aboutText.style.display = 'none';
    }

})







/*MODAL CODE*/

/*const openModal = document.querySelector("[data-open-modal]");
  const closeModal = document.querySelector("[data-close-modal]");
  const aboutDialog = document.querySelector("[data-modal]");

  openModal.addEventListener("click", () => {
    aboutDialog.showModal()
  } )
  closeModal.addEventListener("click", () => {
    aboutDialog.close()
  } )
*/






/*adicionar mensagem
const caixaDeTexto = document.querySelector('#caixa-de-texto');
const btnEnviarTexto = document.querySelector('#btn-enviar-texto');
const mensagensContainer = document.querySelector('.mensagens-container');

btnEnviarTexto.addEventListener('click', () => {


    const mensagemEscrita = caixaDeTexto.value; //salva o conteudo da caixa de texto numa variavel
    const novoParagrafo = document.createElement('p');//cria um novo elemento paragrafo
    const novaDivContainerParagrafo = document.createElement('div');//cria um novo elemento div

    novoParagrafo.textContent = mensagemEscrita; //atribui o conteudo da caixa de texto ao paragrafo

    novaDivContainerParagrafo.appendChild(novoParagrafo); //coloca o novo paragrafo como filho da nova div 
    mensagensContainer.appendChild(novaDivContainerParagrafo);//coloca a nova div como filha da div principal de mensagens

    caixaDeTexto.value = '';


})
*/
