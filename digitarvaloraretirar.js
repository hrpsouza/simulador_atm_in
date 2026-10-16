function returnPage(){
//alert("Client typed zero.");    
// Returns to the start after a few seconds
//setTimeout(() => {
event.preventDefault();
window.location.href = "https://hrpsouza.github.io/simulador_atm_in/";
//location.reload ();
//}, 5000); // 5 seconds delay
}

function handleValue(){

document.getElementById("valorARetirar").addEventListener("click", function () {
        let name = document.getElementById("valorADigitar").value.trim().replace(/[,\.\+\-\*\/]/g, "");
	    
        name = name.slice(0, 4);
        //alert("valor de correção " + name);
        
            // Validate input
            if (!name) {
                return;
            }                

            if ((name == 0)) {
                returnPage();
            }	

            if ((name<4 || name>2000) & (name != 0)) {
                return;
            }	   
            
            if ((name>=4 || name<=2000) & (name != 0)) {
            // Store value in sessionStorage
            sessionStorage.setItem("username", name);

            // Redirect to second page
	    event.preventDefault();
	    //window.location.href = "digitarsenha_sb/Page_2_Receive_Value_Example";
	    window.location.href = "digitarsenha_gh";
        }
        });    

}