import Product from "./product.jsx";

export default function ProductTab() {
    let features = ["6.1-inch Liquid Retina", "5G Enabled", "128 GB Storage"];
    return (
        <>
            <Product title="iPhone 15" price={30000} features={features} />
            <Product title="laptop" price={80000} />
            <Product title="pen" price={10} />
        </>
    );
}   