
const cart = [
    {productName: 'abobora', pricePerkg: 5, kg: 1},
    {producName: 'pepino', pricePerkg: 3.55, kg: 1.3},
    {productName: 'limão', pricePerkg: 1.2, kg: 2},
    {productName: 'abacate', pricePerkg: 5.4, kg: 1.67},
    {productName: 'morango', pricePerkg: 11.9, kg: 3},
]

const shopping = cart.reduce((acumulador, valorAtual) => {
    const result = valorAtual.pricePerkg * valorAtual.kg
    return acumulador + result

}, 0)

console.log(`A compra ficou: ${shopping.toFixed(2)}`)