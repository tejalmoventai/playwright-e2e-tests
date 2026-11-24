
export interface User {
   id: number,
   name: string,
   email: string,
   isActive: boolean
}

export interface Order {
   orderId: string,
   user: User,
   amount: number
   status: OrderStatus
}

export enum OrderStatus {
   Pending = "PENDING",
   Shipped = "SHIPPED",
   Delivered = "DELIVERED",
   Cancelled = "CANCELLED"
}