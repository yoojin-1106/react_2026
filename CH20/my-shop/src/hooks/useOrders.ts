import { useState, useEffect } from "react";
import type { Order } from "../types";
import { getOrders, getOrder } from "../lib/api/orders";

export function useOrders(){
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setError(null);
            try {

            const data = await getOrders();
            setOrders(data);
           } catch (e) {
                setError(`서버에서 불러오지 못했어요`);
           } finally{
                setLoading(false);
           }
        }
        load();
    }, []);

    return {orders, loading, error};
}

export function useOrder(id : string){
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setError(null);
            try {

            const data = await getOrder(id);
            setOrder(data);
           } catch (e) {
                setError(`서버에서 불러오지 못했어요`);
           } finally{
                setLoading(false);
           }
        }
        load();
    }, []);

    return {order, loading, error};
}