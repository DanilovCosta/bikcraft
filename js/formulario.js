const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-colunm: 1/-1; padding: 1rem; border-radius= 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem Entregue</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-colunm: 1/-1; padding: 1rem; border-radius= 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no Envio</span>, você pode enviar diratamente para o nosso email em contato@bikcraft.net</p>";
  }
}
function enviarFormulario(event) {
  event.preventDefault();
  const botao = querySelector("form button");
  botao.disable = true; /*depois de clicar 1 vez desabilita o botão para não enviar + vezes*/
  botao.innerText =
    "Enviando ..."; /*mostrar ao usuario que ja está enviando o formulario*/

  const data = new FormData(formulario);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("subimit", enviarFormulario);
