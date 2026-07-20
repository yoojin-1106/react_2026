import { useState, useEffect } from "react";
import type { Category } from "../types";
import { getCategory, getCategorys } from "../lib/api/category";

export function useOrders(){
    const [categorys, setCategorys] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setError(null);
            try {

            const data = await getCategorys();
            console.log(data);
            setCategorys(data);
           } catch (e) {
                setError(`서버에서 불러오지 못했어요`);
           } finally{
                setLoading(false);
           }
        }
        load();
    }, []);

    return {categorys, loading, error};
}

export function useCatrgory(category : string){
    console.log("useCatrgory");
    const [tab, setTab] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setError(null);
            try {

            const data = await getCategory(category);
            setTab(data);
           } catch (e) {
                setError(`서버에서 불러오지 못했어요`);
           } finally{
                setLoading(false);
           }
        }
        load();
    }, []);

    return {tab, loading, error};
}