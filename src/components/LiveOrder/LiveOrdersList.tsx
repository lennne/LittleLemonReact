import { useEffect, useState } from "react";
import LiveOrders from "./LiveOrders";
import { DataSource } from "../../services/DataSource";

const LiveOrdersList = () => {

    const [orders, setOrders] = useState<any[]>([]);

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