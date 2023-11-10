document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector(".button");
    let email = document.querySelector(".email"); 
    let telefone = document.querySelector(".telefone"); 
    let cliente = document.querySelector(".cliente"); 

    if(button) {
        button.addEventListener("click", function() {
            if (email.value && telefone.value && cliente.value) {
                alert("Obrigado por entrar em contato!");
            } 
        });
    } 
});
document.querySelector("#telefone").addEventListener("input", function(e) {
    this.value = this.value.replace(/[^0-9+]/, "");
});
