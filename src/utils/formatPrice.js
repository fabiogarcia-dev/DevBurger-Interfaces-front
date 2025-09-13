/**exporta o formato dos valores em reias. */

export const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value / 100);
}
