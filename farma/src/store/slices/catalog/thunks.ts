import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBrands = createAsyncThunk(
    'catalog/brands',
    async () => {
        const res = await fetch("/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error('Failed to fetch brands');
    
    const data = await res.json();
    return data
    }
)