function enviarFormulario(form, tipo) {
    const resposta = document.getElementById(`resposta-${tipo}`);
    resposta.textContent = "Obrigado por preencher! Estamos processando suas informações.";
    form.reset();
    return false;
}
