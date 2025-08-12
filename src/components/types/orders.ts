export type Order = {
    id: number;
    item: string;
    quantity: number;
}

export type LiveOrdersProps = {
  orders: Order[];
};