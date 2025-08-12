import { useEffect, useState } from "react";
import LiveOrders from "./LiveOrders";
import { DataSource } from "../../services/DataSource";
import { Order } from "../types/orders";

const LiveOrdersList = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const handleNewOrders = () => {
            const newOrders = DataSource.getOrders();
            setOrders(newOrders);
        }
        DataSource.addListener(handleNewOrders);
        handleNewOrders();
        return () => {
            DataSource.removeListener(handleNewOrders);
        };
    }, []);
    return ( <LiveOrders orders={orders} />)
}
 
export default LiveOrdersList;