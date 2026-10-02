const salarios = [
    { ano: 2010, valor: 510 },
    { ano: 2011, valor: 545 },
    { ano: 2012, valor: 622 },
    { ano: 2013, valor: 678 },
    { ano: 2014, valor: 724 },
    { ano: 2015, valor: 788 },
    { ano: 2016, valor: 880 },
    { ano: 2017, valor: 937 },
    { ano: 2018, valor: 954 },
    { ano: 2019, valor: 998 },
    { ano: 2020, valor: 1045 }
];

const inflacao = [
    { ano: 2010, valor: 5.91 },
    { ano: 2011, valor: 6.50 },
    { ano: 2012, valor: 5.84 },
    { ano: 2013, valor: 5.91 },
    { ano: 2014, valor: 6.41 },
    { ano: 2015, valor: 10.67 },
    { ano: 2016, valor: 6.29 },
    { ano: 2017, valor: 2.95 },
    { ano: 2018, valor: 3.75 },
    { ano: 2019, valor: 4.31 },
    { ano: 2020, valor: 4.52 }
];

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

const opcao = prompt(`
Escolha uma opção:

1 - Histórico salarial
2 - Histórico da inflação
3 - Crescimento salarial
`);

if (opcao === "1") {

    // Opção 1

} else if (opcao === "2") {

    // Opção 2

} else if (opcao === "3") {

    // Opção 3

} else {

    console.log("Opção inválida.");

}
