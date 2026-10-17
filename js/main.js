(() => {
  "use strict";

  const botao = document.querySelector("[data-menu-botao]");
  const painel = document.querySelector("[data-menu-painel]");

  const fecharMenu = () => {
    painel.dataset.aberto = "false";
    botao.setAttribute("aria-expanded", "false");
  };

  botao.addEventListener("click", () => {
    const aberto = painel.dataset.aberto === "true";
    painel.dataset.aberto = String(!aberto);
    botao.setAttribute("aria-expanded", String(!aberto));
  });

  painel.addEventListener("click", (evento) => {
    if (evento.target.closest("a")) fecharMenu();
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Escape" || painel.dataset.aberto !== "true") return;
    fecharMenu();
    botao.focus();
  });

  const formulario = document.querySelector("form");
  const aviso = document.querySelector("[data-form-aviso]");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const invalido = [...formulario.elements].find(
      (campo) => campo.willValidate && !campo.checkValidity()
    );

    if (invalido) {
      aviso.textContent = "Preencha nome e email para enviar.";
      aviso.hidden = false;
      invalido.focus();
      return;
    }

    aviso.textContent = "Mensagem enviada. Entraremos em contato em breve.";
    aviso.hidden = false;
    formulario.reset();
  });
})();
