var customerDB = [
    {id: "C00-001", name: "Amandi Keshala", address: "Galle", salary: 300000},
    {id: "C00-002", name: "Navoda Reshan", address: "Colombo", salary: 500000},
    {id: "C00-003", name: "Monashi Pahasi", address: "Panadura", salary: 50000},
    {id: "C00-004", name: "Amal Weerasekara", address: "Mathara", salary: 100000}
];

var itemDB = [
    {code: "I00-001", itemName: "Rice", qtyOnHand: 50, unitPrice: 210.00},
    {code: "I00-002", itemName: "Dhal", qtyOnHand: 5, unitPrice: 345.00},
    {code: "I00-003", itemName: "Sugar", qtyOnHand: 1, unitPrice: 249.00},
    {code: "I00-004", itemName: "soap", qtyOnHand: 20, unitPrice: 180.00}
];

var orderDB = [
    {
        orderID: "000-001",
        date: "2023/10/07",
        customer: customerDB[0],
        cart: [{item: itemDB[0], qty: 2}, {item: itemDB[1], qty: 1}],
        discount: 250,
        total: 10000,
    },
    {
        orderID: "000-002",
        date: "2023/11/01",
        customer: customerDB[1],
        cart: [{item: itemDB[2], qty: 1}, {item: itemDB[1], qty: 1}, {item: itemDB[0], qty: 1}],
        discount: 10,
        total: 3000
    }
];