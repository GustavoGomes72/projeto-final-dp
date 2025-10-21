import { useEffect, useState } from "react";
import { getProducts, getCategories, getProductsByCategory } from "../services/api";
import ProductCard from "../components/productCard";

export default function Home({onAddToCart}) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProducts()
        .then(setProducts);

        getCategories()
        .then(setCategories);
    }, []);

    const filterCategory = async (cat) => {
        const filtered = await getProductsByCategory(cat);
        setProducts(filtered);
    };

    return (
        <div className="home">
            <h1>Produtos</h1>
            <div className="categories">

                {categories.map((c) => (
                    <button key={c} onClick={() => filterCategory(c)}>
                        {c}
                    </button>
                ))}

                <div className="grid">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
                    ))}
                </div>
            </div>
        </div>
    )
}