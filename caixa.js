const produtos = [
    {
        codigo: 1001,
        nome: "Arroz 5kg",
        preco: 28.90
    },
    {
        codigo: 1002,
        nome: "Feijão 1kg",
        preco: 7.50
    },
    {
        codigo: 1003,
        nome: "Macarrão 500g",
        preco: 3.50
    },
    {
        codigo: 1004,
        nome: "Óleo de soja 900ml",
        preco: 6.20
    },
    {
        codigo: 1005,
        nome: "Açúcar 1kg",
        preco: 4.80
    },
    {
        codigo: 1006,
        nome: "Café 500g",
        preco: 12.90
    },
    {
        codigo: 1007,
        nome: "Leite 1L",
        preco: 5.50
    },
    {
        codigo: 1008,
        nome: "Pão francês 500g",
        preco: 4.00
    },
    {
        codigo: 1009,
        nome: "Manteiga 200g",
        preco: 8.30
    },
    {
        codigo: 1010,
        nome: "Refrigerante 2L",
        preco: 7.00
    },
    {
        codigo: 1011,
        nome: "Suco 1L",
        preco: 5.50
    },
    {
        codigo: 1012,  
        nome: "Cerveja 350ml",
        preco: 3.00
    },
    {
        codigo: 1013,
        nome: "Vinho 750ml",
        preco: 25.00
    },
    {
        codigo: 1014,
        nome: "Whisky 750ml",
        preco: 80.00
    }

];

let carrinho = [];

const codigoInput = document.getElementById("codigo");
const adicionarBtn = document.getElementById("adicionar");
const listaCarrinho = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");
const subtotalSpan = document.getElementById("subtotal");
const valorPagoInput = document.getElementById("valor-pago");
const finalizarBtn = document.getElementById("finalizar");
const trocoSpan = document.getElementById("troco");
const quantidadeInput = document.getElementById("quantidade");
const formasPagamento = document.getElementById("formas-pagamento");
const pagamentoInfo = document.getElementById("pagamento-info");

adicionarBtn.addEventListener("click", adicionarProduto);
finalizarBtn.addEventListener("click", finalizarCompra);

function adicionarProduto() {
    const codigo = parseInt(codigoInput.value);
    const quantidade = parseInt(quantidadeInput.value);

    const produto = produtos.find(p => p.codigo === codigo);
    if (isNaN(codigo)|| isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira um código e quantidade válidos!");
        return;
    }   

    const itemExistente = carrinho.find(item => item.codigo === produto.codigo);
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({ ...produto, quantidade: quantidade });
    }
    atualizarCarrinho();

    codigoInput.value = "";
    quantidadeInput.value = "1";
    codigoInput.focus();
}

function atualizarCarrinho() {
    listaCarrinho.innerHTML = "";

    carrinho.forEach(item => {
        const li = document.createElement("li");

        const subtotal = (item.preco * item.quantidade).toFixed(2);

        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade} = R$ ${subtotal}`;
        listaCarrinho.appendChild(li);
    });

    const total = calcularTotal();
    totalSpan.textContent = total.toFixed(2);
    subtotalSpan.textContent = total.toFixed(2);
}

function calcularTotal() {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
}

function finalizarCompra() {
    const total = calcularTotal();
    const valorPago = parseFloat(valorPagoInput.value);
    const formaPagamento = formasPagamento.value;

    if (formaPagamento === "selecione") {
        alert("Por favor, selecione uma forma de pagamento!");
        return;
    }

    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
        return;
    }

    if (formaPagamento === "dinheiro") {
        pagamentoInfo.textContent = "Forma de pagamento: Dinheiro";
    } else if (formaPagamento === "pix") {
        pagamentoInfo.textContent = "Forma de pagamento: PIX";
    } else if (formaPagamento === "debito") {
        pagamentoInfo.textContent = "Forma de pagamento: Cartão (Débito)";
    } else if (formaPagamento === "credito") {
            pagamentoInfo.textContent = `Forma de pagamento: Cartão (Crédito) ${forma.toUpperCase()}`;
    }


    if (isNaN(valorPago) || valorPago < total) {
        alert("Valor pago é insuficiente!");
        return;
    }

    const troco = valorPago - total;
    trocoSpan.textContent = 'Troco: R$' + troco.toFixed(2);

    carrinho = [];
    atualizarCarrinho();
    valorPagoInput.value = "";
    formaPagamento.value = "selecione";
    alert("Compra finalizada com sucesso!");
}







