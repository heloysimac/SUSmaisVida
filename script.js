function enviarFormulario(form, tipo) {
    const resposta = document.getElementById("resposta-" + tipo);

    if (tipo === "agendamento") {
        resposta.innerText = "Formulário enviado com sucesso! Já vamos enviar um e-mail com a confirmação.";
    } else if (tipo === "duvida") {
        resposta.innerText = "Obrigado pela sua pergunta! Já vamos te responder.";
    } else if (tipo === "smartwatch") {
        resposta.innerText = "Seu smartwatch já está a caminho!";
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
