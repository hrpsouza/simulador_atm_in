//defining variables
var nrsNaTela = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(NumSenhaArmaznd);

function embaralhar(){
nrsNaTela = nrsNaTela.sort(() => Math.random() - 0.5);
}

function updateParagraph(){
// Getting the value from the id in HTML page
let text4 = document.getElementById("test1").textContent;
let text42 = document.getElementById("test2").textContent;
let text43 = document.getElementById("test3").textContent;
let text44 = document.getElementById("test4").textContent;
let text45 = document.getElementById("test5").textContent;
let text46 = document.getElementById("test6").textContent;
let text47 = document.getElementById("test7").textContent;
let text48 = document.getElementById("test8").textContent;
let text49 = document.getElementById("test9").textContent;
let text40 = document.getElementById("test10").textContent;

// Formatting the obtained value
let text5 = text4.trim();
let text52 = text42.trim();
let text53 = text43.trim();
let text54 = text44.trim();
let text55 = text45.trim();
let text56 = text46.trim();
let text57 = text47.trim();
let text58 = text48.trim();
let text59 = text49.trim();
let text50 = text40.trim();

document.getElementById("test1").value = text5;
document.getElementById("test2").value = text52;
document.getElementById("test3").value = text53;
document.getElementById("test4").value = text54;
document.getElementById("test5").value = text55;
document.getElementById("test6").value = text56;
document.getElementById("test7").value = text57;
document.getElementById("test8").value = text58;
document.getElementById("test9").value = text59;
document.getElementById("test10").value = text50;

// Generating random value
embaralhar();
// alert(nrsNaTela[0]);

// Getting the random value
let text6 = nrsNaTela[0];
let text61 = nrsNaTela[1];
let text62 = nrsNaTela[2];
let text63 = nrsNaTela[3];
let text64 = nrsNaTela[4];
let text65 = nrsNaTela[5];
let text66 = nrsNaTela[6];
let text67 = nrsNaTela[7];
let text68 = nrsNaTela[8];
let text69 = nrsNaTela[9];

// Concatenating values
//alert(("texto = ", text5) + " " + text6);
//alert(("texto = ", text52) + " " + text61);
//alert(("texto = ", text53) + " " + text62);

let text7 = (("texto = ", text5) + " " + text6);
let text71 = (("texto = ", text52) + " " + text61);
let text72 = (("texto = ", text53) + " " + text62);
let text73 = (("texto = ", text54) + " " + text63);
let text74 = (("texto = ", text55) + " " + text64);
let text75 = (("texto = ", text56) + " " + text65);
let text76 = (("texto = ", text57) + " " + text66);
let text77 = (("texto = ", text58) + " " + text67);
let text78 = (("texto = ", text59) + " " + text68);
let text79 = (("texto = ", text50) + " " + text69);
// alert(text7);
// alert(text71);
// alert(text72);

// Alterating text on the HTML page
document.getElementById("test1").innerHTML = text7;
document.getElementById("test2").innerHTML = text71;
document.getElementById("test3").innerHTML = text72;
document.getElementById("test4").innerHTML = text73;
document.getElementById("test5").innerHTML = text74;
document.getElementById("test6").innerHTML = text75;
document.getElementById("test7").innerHTML = text76;
document.getElementById("test8").innerHTML = text77;
document.getElementById("test9").innerHTML = text78;
document.getElementById("test10").innerHTML = text79;
//formMessage(text7);
}

function receivingPairKey1(){
// Getting the pair key from the id in HTML page
let kp1 = document.getElementById("submitBtn1").textContent;
let kp11 = document.getElementById("test1").textContent;
let kp12 = document.getElementById("test2").textContent;

// Ensuring the format of the obtained pair key
let kp10 = kp1.trim();
let kp110 = kp11.trim();
let kp120 = kp12.trim();

document.getElementById("submitBtn1").value = kp10;
document.getElementById("test1").value = kp110;
document.getElementById("test2").value = kp120;

//Avoiding reload
event.preventDefault();

// Confirmig pair key obtained

if (
(kp1) &&
(kp110.replace(/\D/g,'')) == NumSenhaArmaznd[2] || (kp120.replace(/\D/g,'')) == NumSenhaArmaznd[2]
) 
{
//alert(("tecla = ", kp10) + " foi a tecla digitada pelo Cliente.\n"
//+("1valor = ", (kp110.replace(/\D/g,''))) + " foi 1 dos valores e \n" 
//+("Outrovalor = ", (kp120.replace(/\D/g,''))) + " foi o outro valor.\n"
//+ ("Cliente acertou o 3o num da senha."));
window.location.href = "digitar4onumsenha.html";
}else{
//alert("Cliente não acertou o 3o num da senha.");
window.location.href = "../../../index.html";
}

}

function receivingPairKey2(){

let kp2 = document.getElementById("submitBtn2").textContent;
let kp21 = document.getElementById("test3").textContent;
let kp22 = document.getElementById("test4").textContent;

let kp20 = kp2.trim();
let kp210 = kp21.trim();
let kp220 = kp22.trim();

document.getElementById("submitBtn2").value = kp20;
document.getElementById("test3").value = kp210;
document.getElementById("test4").value = kp220;

event.preventDefault();

if (
(kp2) &&
(kp210.replace(/\D/g,'')) == NumSenhaArmaznd[2] || (kp220.replace(/\D/g,'')) == NumSenhaArmaznd[2]
) 
{
//alert(("tecla = ", kp20) + " foi a tecla digitada pelo Cliente.\n"
//+("1valor = ", (kp210.replace(/\D/g,''))) + " foi 1 dos valores e \n" 
//+("Outrovalor = ", (kp220.replace(/\D/g,''))) + " foi o outro valor.\n"
//+ ("Cliente acertou o 3o num da senha."));
window.location.href = "digitar4onumsenha.html";
}else{
//alert("Cliente não acertou o 3o num da senha.");
window.location.href = "../../../index.html";
}

}

function receivingPairKey3(){

let kp3 = document.getElementById("submitBtn3").textContent;
let kp31 = document.getElementById("test5").textContent;
let kp32 = document.getElementById("test6").textContent;

let kp30 = kp3.trim();
let kp310 = kp31.trim();
let kp320 = kp32.trim();

document.getElementById("submitBtn3").value = kp30;
document.getElementById("test3").value = kp310;
document.getElementById("test4").value = kp320;

event.preventDefault();

if (
(kp3) &&
(kp310.replace(/\D/g,'')) == NumSenhaArmaznd[2] || (kp320.replace(/\D/g,'')) == NumSenhaArmaznd[2]
) 
{
//alert(("tecla = ", kp30) + " foi a tecla digitada pelo Cliente.\n"
//+("1valor = ", (kp310.replace(/\D/g,''))) + " foi 1 dos valores e \n" 
//+("Outrovalor = ", (kp320.replace(/\D/g,''))) + " foi o outro valor.\n"
//+ ("Cliente acertou o 3o num da senha."));
window.location.href = "digitar4onumsenha.html";
}else{
//alert("Cliente não acertou o 3o num da senha.");
window.location.href = "../../../index.html";
}

}

function receivingPairKey4(){

let kp4 = document.getElementById("submitBtn4").textContent;
let kp41 = document.getElementById("test7").textContent;
let kp42 = document.getElementById("test8").textContent;

let kp40 = kp4.trim();
let kp410 = kp41.trim();
let kp420 = kp42.trim();

document.getElementById("submitBtn4").value = kp40;
document.getElementById("test7").value = kp410;
document.getElementById("test8").value = kp420;

event.preventDefault();

if (
(kp4) &&
(kp410.replace(/\D/g,'')) == NumSenhaArmaznd[2] || (kp420.replace(/\D/g,'')) == NumSenhaArmaznd[2]
) 
{
//alert(("tecla = ", kp40) + " foi a tecla digitada pelo Cliente.\n"
//+("1valor = ", (kp410.replace(/\D/g,''))) + " foi 1 dos valores e \n" 
//+("Outrovalor = ", (kp420.replace(/\D/g,''))) + " foi o outro valor.\n"
//+ ("Cliente acertou o 3o num da senha."));
window.location.href = "digitar4onumsenha.html";
}else{
//alert("Cliente não acertou o 3o num da senha.");
window.location.href = "../../../index.html";
}

}

function receivingPairKey5(){

let kp5 = document.getElementById("submitBtn5").textContent;
let kp51 = document.getElementById("test9").textContent;
let kp52 = document.getElementById("test10").textContent;

let kp50 = kp5.trim();
let kp510 = kp51.trim();
let kp520 = kp52.trim();

document.getElementById("submitBtn5").value = kp50;
document.getElementById("test9").value = kp510;
document.getElementById("test10").value = kp520;

event.preventDefault();

if (
(kp5) &&
(kp510.replace(/\D/g,'')) == NumSenhaArmaznd[2] || (kp520.replace(/\D/g,'')) == NumSenhaArmaznd[2]
) 
{
//alert(("tecla = ", kp50) + " foi a tecla digitada pelo Cliente.\n"
//+("1valor = ", (kp510.replace(/\D/g,''))) + " foi 1 dos valores e \n" 
//+("Outrovalor = ", (kp520.replace(/\D/g,''))) + " foi o outro valor.\n"
//+ ("Cliente acertou o 3o num da senha."));
window.location.href = "digitar4onumsenha.html";
}else{
//alert("Cliente não acertou o 3o num da senha.");
window.location.href = "../../../index.html";
}

}