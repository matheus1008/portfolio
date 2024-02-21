var btn1 = document.querySelector('#show1');
var container1 = document.querySelector('.dp1');
var messageContainer = document.querySelector('.esp');

btn1.addEventListener('click', function() {
  if(container1.style.display === 'block') {
    container1.style.display = 'none';
    messageContainer.style.display = 'block'; // Exibe a mensagem quando o container1 é recolhido
  } else {
    container1.style.display = 'block';
    container2.style.display = 'none'; // Fecha container2 se estiver aberto
    messageContainer.style.display = 'none'; // Esconde a mensagem
  } 
});

var btn2 = document.querySelector('#show2');
var container2 = document.querySelector('.dp2');

btn2.addEventListener('click', function() {
  if(container2.style.display === 'block') {
    container2.style.display = 'none';
    messageContainer.style.display = 'block'; // Exibe a mensagem quando o container2 é recolhido
  } else {
    container2.style.display = 'block';
    container1.style.display = 'none'; // Fecha container1 se estiver aberto
    messageContainer.style.display = 'none'; // Esconde a mensagem
  } 
});
