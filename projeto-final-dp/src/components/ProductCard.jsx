export default function ProductCard({ product, onAdd}) {
    return (
        <div className="product-card">
            <img src ={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => onAdd(product.id)}>Add</button>
        </div>
    )
}