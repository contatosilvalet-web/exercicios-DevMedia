const formulario = document.querySelector("#formulario-divida");
const campoValor = document.querySelector("#valor-divida");
const campoDias = document.querySelector("#dias-atraso");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const valorDivida = Number(campoValor.value);
    const diasAtraso = Number(campoDias.value);

    let taxaJuros;

    if (diasAtraso > 15) {
        taxaJuros = 0.10;
    } else {
        taxaJuros = 0.05;
    }

    const valorJuros = valorDivida * taxaJuros;
    const valorTotal = valorDivida + valorJuros;

    resultado.innerHTML = `
        <h2>Resultado do cálculo</h2>
        <p>Valor original: ${formatarMoeda(valorDivida)}</p>
        <p>Dias de atraso: ${diasAtraso}</p>
        <p>Taxa de juros: ${(taxaJuros * 100).toFixed(0)}%</p>
        <p>Valor dos juros: ${formatarMoeda(valorJuros)}</p>
        <h3>Total atualizado: ${formatarMoeda(valorTotal)}</h3>
    `;
});

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
