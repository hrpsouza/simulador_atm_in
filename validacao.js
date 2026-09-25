function TestaCPF(cpf){
var Soma = 0;
var Resto;
var div1;
var div2;
var resultValidation;
var nextPage;

for (let i = 0; i <= 9; i++) {
  Soma = Soma + ((cpf.substring(i-1, i)) * (11 - i));
  Resto = (Soma * 10) % 11;
  var iResto = cpf.substring(9, 10);
  } 
  
if ((Resto == 10) || (Resto == 11)){
Resto = 0
} 

if (Resto == iResto){
div1 = 1;
}

Soma = 0

for (i = 1; i <= 10; i++) {
Soma = Soma + ((cpf.substring(i-1, i)) * (12 - i));
Resto = (Soma * 10) % 11;
var iResto = cpf.substring(10, 11);
}

if ((Resto == 10) || (Resto == 11)){
Resto = 0
}

if (Resto == iResto){
div2 = 1;
}

if ((div1 == 1)&(div2 == 1))  {
resultValidation = "CPF VÁLIDO";
nextPage = "DENTRO DE ALGUNS SEGUNDOS O SISTEMA SEGUIRÁ PARA PÁGINA SEGUINTE"
displayValidCPF(resultValidation, nextPage, (" "));
}else{
resultValidation = "CPF inVÁLIDO";
nextPage = "DENTRO DE ALGUNS SEGUNDOS O SISTEMA RETORNARÁ AO INÍCIO";    
displayInvalidCPF(resultValidation, nextPage, (" "));
}

}

function displayValidCPF(forToShow1, forToShow2, forToShow3) {
    try {
        //const value = getValue(); // Get the value
	const value1 = forToShow1; // Get one value
    const value2 = forToShow2; // Get the other value
    const value3 = forToShow3; // Get the empty value
        const outputDiv1 = document.getElementById("OkCPFValidation");
        const outputDiv2 = document.getElementById("NextPage");
        const outputDiv3 = document.getElementById("NotCPFValidation");
        //alert("valor a mostrar " + value1 + " " + value2);
        event.preventDefault();

        if ((!outputDiv1)||(!outputDiv2)) {
            console.error("Div with id 'output' not found.");
            return;
        }

        outputDiv1.textContent = value1; // Insert value into the div
        outputDiv2.textContent = value2; // Insert value into the other div
        outputDiv3.textContent = value3; // Insert the empty value
        followPage();
    } catch (error) {
        console.error("Error displaying value:", error);
    }
}

function displayInvalidCPF(forToShow1, forToShow2, forToShow3) {
    try {
        //const value = getValue(); // Get the value
	const value1 = forToShow1; // Get one value
    const value2 = forToShow2; // Get the other value
    const value3 = forToShow3; // Get the empty value
        const outputDiv1 = document.getElementById("NotCPFValidation");
        const outputDiv2 = document.getElementById("NextPage");
        const outputDiv3 = document.getElementById("OkCPFValidation");
        event.preventDefault();

        if ((!outputDiv1)||(!outputDiv2)) {
            console.error("Div with id 'output' not found.");
            return;
        }

        outputDiv1.textContent = value1; // Insert value into the div
        outputDiv2.textContent = value2; // Insert value into the other div
        outputDiv3.textContent = value3; // Insert the empty value
        returnPage();
    } catch (error) {
        console.error("Error displaying value:", error);
    }
}

function reloadThisPage(){
// Returns to the start after a few seconds
setTimeout(() => {
//window.location.href = "../index.html";
location.reload ();
}, 10000); // 10 seconds delay
}

function returnPage(){
// Returns to the start after a few seconds
setTimeout(() => {
window.location.href = "../index.html";
//location.reload ();
}, 10000); // 10 seconds delay
}

function followPage(){
// Goes to the next page
setTimeout(() => {
window.location.href = "retiradacomcartaoinicial/retiradacomcartaoinicial.html";
//location.reload ();
}, 5000); // 5 seconds delay
}