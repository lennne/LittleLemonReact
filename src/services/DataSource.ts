import { Order } from "../components/types/orders";


let orders: Order[] = [
    {id: 1, item: "Burger", quantity: 2},
    {id: 2, item: "Fries", quantity: 1},
]

let listeners: (() => void)[] = [];

export const DataSource = {
    getOrders: () => orders,
    addListener: (listener: () => void) => {
         listeners.push(listener);
    },
    removeListener: (listener: () => void) => {
        listeners = listeners.filter((l) => l !== listener);
    },
    simulateNewOrder: (order: Order) => {
        orders = [...orders, order];
        listeners.forEach((l) => l());
    }
}