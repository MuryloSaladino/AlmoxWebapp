import type { Order, OrderStatus, OrderSummary, OrderUpdate } from "@/types/entities/orders.types";
import { almoxApi } from ".";
import { Query } from "@/utils/query.utils";

export const OrdersService = {

    url: "/orders",

    start: async function() {
        const response = await almoxApi.post<Order>(this.url);
        return response.data;
    },

    get: async function(filters: { userId: string, status?: OrderStatus }) {
        const response = await almoxApi.get<OrderSummary[]>(this.url + Query.fromObject(filters));
        return response.data;
    },

    getById: async function(orderId: string) {
        const response = await almoxApi.get<Order>(`${this.url}/${orderId}`);
        return response.data;
    },

    addItem: async function(itemId: string, quantity: number) {
        const response = await almoxApi.post<OrderSummary>(`${this.url}/items/${itemId}`, { quantity })
        return response.data;
    },

    removeItem: async function(itemId: string) {
        await almoxApi.delete(`${this.url}/items/${itemId}`)
    },

    update: async function(requestId: string, payload: OrderUpdate) {
        const response = await almoxApi.put<OrderSummary>(`${this.url}/${requestId}`, payload);
        return response.data;
    },

    updateStatus: async function(requestId: string, status: OrderStatus) {
        const response = await almoxApi.post<OrderSummary>(`${this.url}/${requestId}/status/${status}`);
        return response.data;
    },

} as const;