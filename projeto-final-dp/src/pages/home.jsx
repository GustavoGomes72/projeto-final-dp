import { useEffect, useState } from "react";
import { getProducts, getCategories, getProductsByCategory } from "../services/api";
import ProductCard from "../components/productCard";
import CategoryFilter from "../components/categoryFilter";

export default function Home({onAddToCart}) {
    const [products, setProducts] = useState([]);
    useEffect(() => { getProducts().then(setProducts); });


    return (
        <div className="home">
            <h1>Produtos</h1>

                <div className="grid">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
                    ))}
                </div>
            </div>
    )
}