function enviarFormulario(form, tipo) {
    const resposta = document.getElementById("resposta-" + tipo);
    resposta.innerText = "Formulário enviado com sucesso!";
    form.reset();
    return false;
}
