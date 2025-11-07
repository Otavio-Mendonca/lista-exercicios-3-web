/*
  Exercício 5 - JavaScript Básico
  Aluno: Otavio José de Mendonça
*/

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o formulário
    const form = document.getElementById('feedbackForm');

    if (form) {
        // Adiciona evento de submit ao formulário
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio padrão do formulário

            // Captura os valores dos campos
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const endereco = document.getElementById('endereco').value;
            const tipoFeedback = document.getElementById('tipoFeedback').value;
            const feedback = document.getElementById('feedback').value;

            // Validação básica
            if (!nome || !email || !endereco || !tipoFeedback || !feedback) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            // Monta a mensagem de confirmação
            let mensagem = `✅ Feedback enviado com sucesso!\n\n`;
            mensagem += `Nome: ${nome}\n`;
            mensagem += `E-mail: ${email}\n`;
            mensagem += `Endereço: ${endereco}\n`;
            mensagem += `Tipo: ${tipoFeedback}\n`;
            mensagem += `Feedback: ${feedback}`;

            // Exibe a mensagem
            alert(mensagem);

            // Opcional: Limpa o formulário
            form.reset();
        });
    }

    // Adiciona interatividade aos inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.backgroundColor = '#f0f8ff';
        });

        input.addEventListener('blur', function() {
            this.style.backgroundColor = 'white';
        });
    });
});
