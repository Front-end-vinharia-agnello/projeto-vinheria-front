document.querySelector("form").onsubmit = function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
};
var idade = prompt("Qual a sua idade atual? ")
