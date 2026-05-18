const employees = [
    { id: 1, name: 'Alice', age: 23, status: 'working' },
    { id: 3, name: 'Bob', age: 25, status: 'working' },
    { id: 6, name: 'John', age: 27, status: 'working' },
    { id: 8, name: 'David', age: 23, status: 'quit_job' },
    { id: 10, name: 'Eve', age: 20, status: 'working' },
];

const products = [
    { id: 1, name: 'Phone', price: 1200 },
    { id: 2, name: 'Laptop', price: 3000 },
    { id: 3, name: 'Tab', price: 2000 },
    { id: 4, name: 'PC', price: 800 },
    { id: 5, name: 'Monitor', price: 1500 },
];

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 3, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 6, productId: 1, quantity: 2 },
    { id: 5, employeeId: 3, productId: 5, quantity: 3 },
    { id: 6, employeeId: 8, productId: 1, quantity: 1 },
    { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

function getProductById(productId) {
    return products.find(function (product) {
        return product.id === productId;
    });
}

function getEmployeeById(employeeId) {
    return employees.find(function (employee) {
        return employee.id === employeeId;
    });
}

function getRevenue(order) {
    const product = getProductById(order.productId);
    return product.price * order.quantity;
}

// Bai 1
function getWorkingEmployees() {
    return employees.filter((employee) => {
        return employee.status === 'working';
    });
}

// Bai 2
function getOldestEmployee() {
    let oldest = employees[0];
    for (const employee of employees) {
        if (employee.age > oldest.age) {
            oldest = employee;
        }
    }
    return oldest;
}

// Bai 3
function getCheapestProduct() {
    let cheapest = products[0];
    for (const product of products) {
        if (product.price < cheapest.price) {
            cheapest = product;
        }
    }
    return cheapest;
}

// Bài 4
function getBestSellingProduct() {
    const result = {};

    for (const order of orders) {
        if (!result[order.productId]) {
            result[order.productId] = 0;
        }

        result[order.productId] += order.quantity;
    }

    let bestProductId = null;
    let maxQuantity = 0;

    for (const productId in result) {
        if (result[productId] > maxQuantity) {
            maxQuantity = result[productId];
            bestProductId = Number(productId);
        }
    }

    const product = getProductById(bestProductId);

    return {
        ...product,
        totalQuantity: maxQuantity,
    };
}

// Bai 5
function getHighestRevenueProduct() {
    const result = {};

    for (const order of orders) {
        const revenue = getRevenue(order);

        if (!result[order.productId]) {
            result[order.productId] = 0;
        }

        result[order.productId] += revenue;
    }

    let bestProductId = null;
    let maxRevenue = 0;

    for (const productId in result) {
        if (result[productId] > maxRevenue) {
            maxRevenue = result[productId];
            bestProductId = Number(productId);
        }
    }

    const product = getProductById(bestProductId);

    return {
        ...product,
        totalRevenue: maxRevenue,
    };
}

// Bai 6
function getBestSellerEmployee() {
    const result = {};

    for (const order of orders) {
        if (!result[order.employeeId]) {
            result[order.employeeId] = 0;
        }

        result[order.employeeId] += order.quantity;
    }

    let bestEmployeeId = null;
    let maxQuantity = 0;

    for (const employeeId in result) {
        if (result[employeeId] > maxQuantity) {
            maxQuantity = result[employeeId];
            bestEmployeeId = Number(employeeId);
        }
    }

    const employee = getEmployeeById(bestEmployeeId);

    return {
        ...employee,
        totalQuantity: maxQuantity,
    };
}

// Bai 7
function getHighestRevenueEmployee() {
    const result = {};

    for (const order of orders) {
        const revenue = getRevenue(order);

        if (!result[order.employeeId]) {
            result[order.employeeId] = 0;
        }

        result[order.employeeId] += revenue;
    }

    let bestEmployeeId = null;
    let maxRevenue = 0;

    for (const employeeId in result) {
        if (result[employeeId] > maxRevenue) {
            maxRevenue = result[employeeId];
            bestEmployeeId = Number(employeeId);
        }
    }

    const employee = getEmployeeById(bestEmployeeId);

    return {
        ...employee,
        totalRevenue: maxRevenue,
    };
}

// Bai 8
function getBestRevenueProductOfEachEmployee() {
    const result = {};

    for (const order of orders) {
        const revenue = getRevenue(order);

        if (!result[order.employeeId]) {
            result[order.employeeId] = {};
        }

        if (!result[order.employeeId][order.productId]) {
            result[order.employeeId][order.productId] = 0;
        }

        result[order.employeeId][order.productId] += revenue;
    }

    const finalResult = [];

    for (const employeeId in result) {
        let bestProductId = null;
        let maxRevenue = 0;

        for (const productId in result[employeeId]) {
            if (result[employeeId][productId] > maxRevenue) {
                maxRevenue = result[employeeId][productId];
                bestProductId = Number(productId);
            }
        }

        finalResult.push({
            employee: getEmployeeById(Number(employeeId)),
            product: getProductById(bestProductId),
            totalRevenue: maxRevenue,
        });
    }

    return finalResult;
}

// Bai 9
function getCommissionOfEachEmployee() {
    const result = {};

    for (const order of orders) {
        const revenue = getRevenue(order);

        if (!result[order.employeeId]) {
            result[order.employeeId] = 0;
        }

        result[order.employeeId] += revenue;
    }

    const finalResult = [];

    for (const employeeId in result) {
        const employee = getEmployeeById(Number(employeeId));
        const revenue = result[employeeId];

        finalResult.push({
            ...employee,
            totalRevenue: revenue,
            commission: revenue * 0.03,
        });
    }

    return finalResult;
}

// Bai 10
const sortEmployeesByRevenueDesc = () => {
    const data = getCommissionOfEachEmployee();

    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[j].totalRevenue > data[i].totalRevenue) {
                [data[i], data[j]] = [data[j], data[i]];
            }
        }
    }

    return data;
};

console.log('Bài 1:', getWorkingEmployees());
console.log('Bài 2:', getOldestEmployee());
console.log('Bài 3:', getCheapestProduct());
console.log('Bài 4:', getBestSellingProduct());
console.log('Bài 5:', getHighestRevenueProduct());
console.log('Bài 6:', getBestSellerEmployee());
console.log('Bài 7:', getHighestRevenueEmployee());
console.log('Bài 8:', getBestRevenueProductOfEachEmployee());
console.log('Bài 9:', getCommissionOfEachEmployee());
console.log('Bài 10:', sortEmployeesByRevenueDesc());
