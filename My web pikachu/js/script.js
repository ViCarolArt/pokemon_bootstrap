// ===== ROLAGEM SUAVE AO CLICAR NOS LINKS =====
$("a.nav-link, .btn-warning").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top - 70
    }, 800);
  }
});

// ===== BOTÕES DE "MAIS INFORMAÇÕES" =====
$(".mais-info").click(function () {
  const pokemon = $(this).data("pokemon"); // pega qual pokémon
  $("#" + pokemon + "-info").slideToggle(400); // mostra/oculta info
});

// ===== VALIDAÇÃO DO FORMULÁRIO =====
$("#form-contato").submit(function (event) {
  event.preventDefault();
  const nome = $("#nome").val().trim();
  const email = $("#email").val().trim();
  const mensagem = $("#mensagem").val().trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
  } else {
    alert("Mensagem enviada com sucesso! ⚡");
    $(this)[0].reset();
  }
});

