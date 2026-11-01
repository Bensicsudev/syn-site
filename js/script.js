 'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
    menu.classList.toggle('open', !expanded);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
// Links reais configuráveis, sem telefone ou e-mail inventados.
const contactLink = document.querySelector('#contact-link');
const contactHint = document.querySelector('#contact-hint');
const cfg = window.SYN_CONFIG || {};
const phone = String(cfg.whatsapp || '').replace(/\D/g, '');
const email = String(cfg.email || '').trim();
if (contactLink) {
  if (/^\d{11,15}$/.test(phone)) {
    const message = encodeURIComponent(cfg.mensagemWhatsapp || 'Olá! Gostaria de solicitar um orçamento.');
    contactLink.href = `https://wa.me/${phone}?text=${message}`;
    contactLink.target = '_blank';
    contactLink.rel = 'noopener noreferrer';
    if (contactHint) contactHint.textContent = 'Converse com a gente pelo WhatsApp.';
  } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    contactLink.href = `mailto:${email}?subject=${encodeURIComponent('Orçamento de site - ARKORA STUDIO')}`;
    if (contactHint) contactHint.textContent = 'Envie os detalhes do seu projeto por e-mail.';
  } else {
    contactLink.setAttribute('aria-disabled', 'true');
    contactLink.title = 'Configure WhatsApp ou e-mail em js/config.js';
    contactLink.addEventListener('click', event => event.preventDefault());
  }
}
// Fechar o menu ao clicar fora ou apertar ESC.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu && menuButton) {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }
});
