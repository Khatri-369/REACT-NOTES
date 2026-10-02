// Component name starts with an uppercase letter.
// Destructuring props with default values.
export default function ProductCard({
    title = "Unknown Product",
    price = 0,
    description = "No description",
    offer = "No offer",
    inStock = false,
    storename = "hello",
}) {
    // JavaScript logic and dynamic styling.
    const styles = {
        backgroundColor: inStock ? "#dce5ec" : "#fff",
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "20px",
        width: "220px",
    };

    return (
        <div className="product-card" style={styles}>
            {storename}
            {/* JavaScript expressions inside JSX */}
            <h2>{title}</h2>
            <p>Price: ₹{price}</p>
            <p>{description}</p>
            <p>Offer: {offer}</p>

            {/* Conditional rendering using && */}
            {price > 3000 && <p>⭐ Premium Product</p>}
            {price <= 3000 && <p>BUDGET FRIENDLY</p>}
            {/* Conditional rendering using a ternary */}
            <button disabled={!inStock}>
                {inStock ? "Buy Now" : "Out of Stock"}
            </button>
        </div>
    );
}