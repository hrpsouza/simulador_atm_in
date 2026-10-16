
// Splits a string into an array of single characters.
// @param {string} str - The input string.
// @returns {string[]} - Array with one character per position.

function stringToCharArray(str) {
    // Validate input
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }
    return str.split("");
}

function alertEachString(arr) {
    
    // Validate that arr is actually an array
    if (!Array.isArray(arr)) {
        console.error("Input must be an array.");
        return;
    }

    // Iterate over each element
    arr.forEach((item, index) => {

        // Ensure the element is a string before alerting
	if (typeof item === "string") {
	
	//if ((`Value is ${index}` === "Value is 0")){

	//}

	// Confirming length of the array of 1 element
	if (arr.length == 1) {

	// Defining variables for the elements of the array:
	if (arr[0]){
	al = arr[0];
	}else{
	al = 0;
	}

  	}// End of confirming length of the array of 1 element

	// Confirming length of the array of 2 elements
	if (arr.length == 2) {

	// Defining variables for the elements of the array:
	if (arr[0]){
	dz = arr[0];
	}else{
	dz = 0;
	}

	if (arr[1]){
	al = arr[1];
	}else{
	al = 0;
	}

	}// End of confirming length of the array of 2 elements
	
	// Confirming length of the array of 3 elements

	if (arr.length == 3) {

	// Defining variables for the elements of the array:
	if (arr[0]){	
	hu = arr[0];
	}else{
	hu = 0;
	}

	if (arr[1]){
	dz = arr[1];
	}else{
	dz = 0;
	}

	if (arr[2]){
	al = arr[2];
	}else{
	al = 0;
	}

	}// End of confirming length of the array of 3 elements

	// Confirming length of the array of 4 elements
	if (arr.length == 4) {
        
	// Defining variables for the elements of the array:
	if (arr[0]){
	th = arr[0];
	}else{
	th = 0;
	}

	if (arr[1]){	
	hu = arr[1];
	}else{
	hu = 0;
	}

	if (arr[2]){
	dz = arr[2];
	}else{
	dz = 0;
	}

	if (arr[3]){
	al = arr[3];
	}else{
	al = 0;
	}

	}// End of confirming length of the array of 4 elements

	// Verifying if is a string
        } else {
            console.warn(`Element at index ${index} is not a string and will be skipped.`);
        }
    });

	// Sending once value for formatting
	if (arr.length == 1) {
	let t = 0;
	let th = t.toString();
	let h = 0;
	let hu = h.toString();
	let d = 0;
	let dz = d.toString();
	convertStringThousToInWord(th, hu, dz, al)
	}

	if (arr.length == 2) {
	let t = 0;
	let th = t.toString();
	let h = 0;
	let hu = h.toString();
	convertStringThousToInWord(th, hu, dz, al)
	}

	if (arr.length == 3) {
	let t = 0;
	let th = t.toString();
	convertStringThousToInWord(th, hu, dz, al)
	}

	if (arr.length == 4) {
	convertStringThousToInWord(th, hu, dz, al)
	}
}

function convertStringThousToInWord(tInput, hInput, dInput, aInput){

let tOutput;
switch (tInput) {
  case "0":
    tOutput = " ";
    break;
  case "1":
    tOutput = "hum mil e ";
    break;
  case "2":
    tOutput = "dois mil e ";
    break;
  default:
    // code block
}

let hOutput;
switch (hInput) {
  case "0":
    hOutput = " ";
    break;
  case "1":
    hOutput = "cento e ";
    break;
  case "2":
    hOutput = "duzentos e ";
    break;
  case "3":
    hOutput = "trezentos e ";
    break;
  case "4":
    hOutput = "quatrocentos e ";
    break;
  case "5":
    hOutput = "quinhentos e ";
    break;
  case "6":
    hOutput = "seissentos e ";
    break;
  case "7":
    hOutput = "setecentos e ";
    break;
  case "8":
    hOutput = "oitocentos e ";
    break;
  case "9":
    hOutput = "novecentos e ";
    break;
  default:
    // code block
}

let dOutput;
switch (dInput) {
  case "0":
    dOutput = " ";
    break;
  case "1":
    dOutput = " dez";
    break;
  case "2":
    dOutput = "vinte e ";
    break;
  case "3":
    dOutput = "trinta e ";
    break;
  case "4":
    dOutput = "quarenta e ";
    break;
  case "5":
    dOutput = "cinquenta e ";
    break;
  case "6":
    dOutput = "sessenta e ";
    break;
  case "7":
    dOutput = "setenta e ";
    break;
  case "8":
    dOutput = "oitenta e ";
    break;
  case "9":
    dOutput = "noventa e ";
    break;
  default:
    // code block
}

let aOutput;
switch(aInput) {
  case "0":
    aOutput = " ";
    break;
  case "1":
    aOutput = "um";
    break;
  case "2":
    aOutput = "dois";
    break;
  case "3":
    aOutput = "três";
    break;
  case "4":
    aOutput = "quatro";
    break;
  case "5":
    aOutput = "cinco";
    break;
  case "6":
    aOutput = "seis";
    break;
  case "7":
    aOutput = "sete";
    break;
  case "8":
    aOutput = "oito";
    break;
  case "9":
    aOutput = "nove";
    break;
  default:
    // code block
}

if (aOutput == " "){

	// Step 1: Remove the substring " e " using slice()
	// Find the index of " e "
	let index = dOutput.indexOf(" e ");
	if (index !== -1) {
    	// Remove it by concatenating parts before and after
    	dOutput = dOutput.slice(0, index) + dOutput.slice(index + 3); // " e " has length 3
	}

	// Step 2: Remove extra spaces using replace(/\s+/g, "")
	dOutput = dOutput.replace(/\s+/g, "");
}

if (((aOutput == "seis")|(aOutput == "sete")) & (dOutput == " dez")){
	dOutput = " dezes";
}

//if ((aOutput == "sete") & (dOutput == " dez")){
//	dOutput = " dezes";
//}

if ((aOutput == "nove") & (dOutput == " dez")){
	dOutput = " deze";
}

let daOutput;
daOutput = dOutput + aOutput;

if (daOutput.trim() == "dezum"){
	daOutput = "onze";
}

if (daOutput.trim() == "dezdois"){
	daOutput = "doze";
}

if (daOutput.trim() == "deztrês"){
	daOutput = "treze";
}

if (daOutput.trim() == "dezquatro"){
	daOutput = "catorze";
}

if (daOutput.trim() == "dezcinco"){
	daOutput = "quinze";
}

let thdiOutput;
thdiOutput = tOutput + hOutput + daOutput  + " reais";

displayValue(thdiOutput);
}

function displayValue(forToShow) {
    try {
        //const value = getValue(); // Get the value
	const value = forToShow; // Get the value
        const outputDiv = document.getElementById("intoWordsValue");

        if (!outputDiv) {
            console.error("Div with id 'output' not found.");
            return;
        }

        outputDiv.textContent = value; // Insert value into the div
    } catch (error) {
        console.error("Error displaying value:", error);
    }
}

var NumSenhaArmaznd = [5, 0, 1, 3];