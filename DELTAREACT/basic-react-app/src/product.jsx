import "./product.css"

export default function Product({ title, price, features }) {
    let isDiscount = price > 30000;
    let styles = { backgroundColor: isDiscount ? "#DCE5EC" : "" };
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h3>{price}</h3>
            {price > 30000 && (<p>"DISCOUNT OF 5% BRO"</p>)}
            <ul>
                {features && features.map((feature, index) => <li key={index}>{feature}</li>)}
            </ul>
        </div>
    );
}