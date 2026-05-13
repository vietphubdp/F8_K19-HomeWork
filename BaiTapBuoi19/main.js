const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 },
];

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 },
        ],
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 },
        ],
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 },
        ],
    },
];

function findTopProduct(products, orders) {
    let topProduct = {};
    let maxRevenue = 0;

    for (const product of products) {
        let total = 0;
        for (const order of orders) {
            for (const item of order.items) {
                if (item.productId === product.id) {
                    total += product.price * item.quantity;
                }
            }
        }
        if (!topProduct.revenue || total > maxRevenue) {
            maxRevenue = total;
            topProduct = {
                name: product.name,
                revenue: total,
            };
        }
    }

    return topProduct;
}

console.log(findTopProduct(products, orders));
