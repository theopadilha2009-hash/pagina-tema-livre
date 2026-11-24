/* ==========================================================
   Calculadora de garrafas PET - Reciclagem na Escola
   Lê os três campos do formulário, confere os dados e mostra
   o total de garrafas e o peso aproximado de plástico.
   ========================================================== */

// Peso médio de uma garrafa PET de 500 ml, em quilos (aproximado: 25 g).
const PESO_GARRAFA_KG = 0.025;

// Elementos da página que o script usa
const form = document.getElementById("form-garrafas");
const areaErro = document.getElementById("erro");
const areaResultado = document.getElementById("resultado");

/**
 * Lê um campo, confere se o valor serve e devolve o número.
 * Se algo estiver errado, lança um Error com a mensagem para o usuário.
 * @param {string} id   id do input no HTML
 * @param {string} nome nome do campo, usado na mensagem de erro
 * @param {number} min  menor valor aceito
 * @param {number} max  maior valor aceito
 * @returns {number}
 */
function lerNumero(id, nome, min, max) {
  // .value sempre chega como texto, então confiro o texto antes de converter:
  // Number("") dá 0 e pareceria um valor válido.
  const texto = document.getElementById(id).value;

  if (texto.trim() === "") {
    throw new Error(`Preencha o campo "${nome}".`);
  }

  const numero = Number(texto);

  if (Number.isNaN(numero)) {
    throw new Error(`"${nome}" precisa ser um número.`);
  }

  if (!Number.isInteger(numero)) {
    throw new Error(`"${nome}" precisa ser um número inteiro, sem vírgula.`);
  }

  if (numero < min || numero > max) {
    throw new Error(`"${nome}" precisa estar entre ${min} e ${max}.`);
  }

  return numero;
}

// Roda quando o formulário é enviado
form.addEventListener("submit", function (evento) {
  // Impede o navegador de recarregar a página: quem trata o envio é o JavaScript
  evento.preventDefault();

  try {
    const alunos = lerNumero("alunos", "Quantos alunos participam?", 1, 1000);
    const garrafas = lerNumero("garrafas", "Garrafas por aluno por semana", 1, 50);
    const semanas = lerNumero("semanas", "Por quantas semanas?", 1, 52);

    const total = alunos * garrafas * semanas;
    const quilos = total * PESO_GARRAFA_KG;

    // Dados válidos: limpa o erro e mostra o resultado
    areaErro.textContent = "";
    areaResultado.textContent =
      `Sua turma recicla ${total.toLocaleString("pt-BR")} garrafa(s) PET ` +
      `em ${semanas} semana(s), cerca de ${quilos.toLocaleString("pt-BR")} kg de plástico.`;
  } catch (erro) {
    // Dado inválido: mostra a mensagem na página e apaga o resultado antigo.
    // Nada trava: o usuário corrige o campo e envia de novo.
    areaResultado.textContent = "";
    areaErro.textContent = erro.message;
  }
});
