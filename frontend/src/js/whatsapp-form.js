function initWhatsAppForm() {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) {
    return;
  }

  function openWhatsAppFromForm(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const texto =
      'Olá, vim pelo site da Vistamed.\n\n' +
      'Nome: ' + nome + '\n' +
      'E-mail: ' + email + '\n' +
      'Telefone: ' + telefone + '\n' +
      'Mensagem: ' + mensagem;

    const whatsappUrl = 'https://wa.me/5592985702121?text=' + encodeURIComponent(texto);
    window.open(whatsappUrl, '_blank', 'noopener');
  }

  contactForm.addEventListener('submit', openWhatsAppFromForm);
}
