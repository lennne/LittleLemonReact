import { LiveOrdersProps, Order } from "../types/orders";

const LiveOrders = ({orders}: LiveOrdersProps) => {
    return ( 
    <div>
        <h2>Live Orders</h2>
        <ul>
            {orders.map((order) => (
                <li key={order.id}>
                    {order.item} x {order.quantity}
                </li>
            ))}
        </ul>
    </div>
    );
}
 
export default LiveOrders;