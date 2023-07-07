const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const titulo = document.querySelector('.titulo');

image1.addEventListener('click', () => {
    image2.style.display = 'block'; 
    image1.style.display = 'none'; 
})

image2.addEventListener('click', () => {
    image2.style.display = 'none';
    titulo.style.display = 'block';
})





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
