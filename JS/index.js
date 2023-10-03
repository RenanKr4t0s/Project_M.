const botoes = document.querySelectorAll("[data-button]");
const depoimentos = document.querySelectorAll('[data-depoimentos]');
const botaoRenan = document.querySelector('[data-button="renan"');
//console.log(botoes);
//console.log(depoimentos);

function alertMari(){
    alert("Montei esse site pois acho que é muito difícil pra Mari...");
    alert("...");
    alert("Ser LINDA desse jeito! Hehehehe.");
    alert("AVISO: Essa foi uma piada interna!!!");
}
//até aqui eu sei que tá tudo funcionando
//minuto 7:55 do video (criando arrow functions simplificadas)(https://cursos.alura.com.br/extra/alura-mais/data-attributes-do-html5-c109).

function esconderConteudo(){
    botoes.forEach(botao => {
        botao.className = 'botao-off';
    })
    depoimentos.forEach(depoimento =>{
        depoimento.className = "hide"
    })
}

function ativarConteudo(valor){
    const conteudo = document.querySelector(`[data-depoimentos="${valor}"]`);
    conteudo.className = "ativa"

}

botaoRenan.addEventListener("click", ()=>{
  alertMari() ;
})

botoes.forEach(botao => {
    botao.addEventListener("click", (evento) =>{
        classe = botao.dataset.button;
        
        esconderConteudo();
        ativarConteudo(classe);
        botao.className = "botao-on"
    })
    
});



