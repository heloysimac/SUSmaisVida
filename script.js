function enviarFormulario(form, tipo) {
    const resposta = document.getElementById("resposta-" + tipo);

    if (tipo === "agendamento") {
        resposta.innerText = "Já estamos agendando seu atendimento.";
    } else if (tipo === "duvida") {
        resposta.innerText = "Nossa IA já vai te responder.";
    } else if (tipo === "smartwatch") {
        resposta.innerText = "Seu Smartwatch já vai ser enviado.";
        form.style.display = "none";
    } else if (tipo === "perfil") {
        const nome = form.nome.value;
        const email = form.email.value;
        const cpf = form.cpf.value;

        const resultado = `
            <strong>Perfil criado com sucesso!</strong><br><br>
            <strong>Nome:</strong> ${nome}<br>
            <strong>E-mail:</strong> ${email}<br>
            <strong>CPF:</strong> ${cpf}<br>
        `;

        resposta.innerHTML = resultado;
        form.style.display = "none";
    } else {
        resposta.innerText = "Formulário enviado com sucesso!";
    }

    form.reset();
    return false;
}
