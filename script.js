function enviarFormulario(form, tipo) {
    const resposta = document.getElementById("resposta-" + tipo);
    resposta.innerText = "Formulário enviado com sucesso!";
    form.reset();
    return false;
}

function mostrarAba(id) {
    document.querySelectorAll('.aba').forEach(secao => {
        secao.classList.remove('ativa');
    });
    const selecionada = document.getElementById(id);
    if (selecionada) {
        selecionada.classList.add('ativa');
    }
}

window.onload = function () {
    mostrarAba('inicio');
};
