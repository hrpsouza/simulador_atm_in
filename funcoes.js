function EscolherTarefaInicial(){
//  var tarefaInicialText = "Cliente escolheu opção ";
  var tarefaInicial = document.getElementById("tarefaInicial");
  tarefaInicial = Number(tarefaInicial.value);
alert("Cliente escolheu opção " + tarefaInicial);
seguirOutroPen(tarefaInicial);
}

function seguirOutroPen(tarefaInicial){

switch(tarefaInicial) {
  case 0:
    alert("Cliente escolheu opção " + tarefaInicial + "\n Atendimento será direcionado para página de Retiradas.\n POR FAVOR DIGITAR A TECLA \"ENTER\"");
    seguirPaginaRetiradas();
    break;
  case 1:
    alert("Cliente escolheu opção " + tarefaInicial + "\n Atendimento será direcionado para página de Entradas.\n POR FAVOR DIGITAR A TECLA \"ENTER\"");
    break;
  case 2:
    alert("Cliente escolheu opção " + tarefaInicial + "\n Atendimento será direcionado para página de Serviços Diversos.\n POR FAVOR DIGITAR A TECLA \"ENTER\"");
    break;
}

}

function seguirPaginaRetiradas(){
alert("Seguindo para página de Retiradas");
window.location.href = "file:///C:/Users/user/OneDrive/Documents/Simulador_ATM/Simulador_ATM_sb/Simulador_ATM_retiradacomcartaoinicial/retiradacomcartaoinicial.html";
}