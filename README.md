# React Learning Notes & Concepts ⚛️

A comprehensive reference for foundational React concepts, core rules, and best practices learned during hands-on projects.

---

## Table of Contents
1. [Introduction to React](#1-introduction-to-react)
2. [Components](#2-components)
3. [JSX (JavaScript XML)](#3-jsx-javascript-xml)
4. [React Strict Mode](#4-react-strict-mode)
5. [Props (Properties)](#5-props-properties)
6. [Destructuring Props](#6-destructuring-props)
7. [Rendering Lists with `map()`](#7-rendering-lists-with-map)
8. [Conditional Rendering & Styling](#8-conditional-rendering--styling)
9. [Multi-Dimensional Data (2D Arrays)](#9-multi-dimensional-data-2d-arrays)

---

## 1. Introduction to React
* **What is React?**: An open-source JavaScript library developed by Meta for building fast, interactive user interfaces (especially Single Page Applications - SPAs).
* **Library vs Framework**: React is a library focused primarily on the View layer (`V` in MVC).
* **Virtual DOM**: React creates a lightweight virtual representation of the actual DOM in memory, calculates the minimal differences (reconciliation / diffing), and batches updates efficiently.

---

## 2. Components
Components are independent, reusable pieces of code that output UI. They let you split the UI into separate, isolated chunks.

```jsx
export default function Card() {
    return (
        <div className="card">
            <h2>Product Card</h2>
        </div>
    );
}
```

### ⚠️ Golden Rule: PascalCase Naming
* Component names **MUST ALWAYS start with a capital letter** (e.g., `Product`, `HelloMsg`, `AmazonCard`).
* **Why?** React treats lowercase tags (like `<product />` or `<hellomsg />`) as native HTML tags (`<div>`, `<p>`). If you use lowercase, React will not execute your component!

---

## 3. JSX (JavaScript XML)
JSX is a syntax extension for JavaScript that allows you to write HTML-like markup directly within JavaScript code.

* **Babel Compiler**: Browsers do not understand JSX natively. Babel compiles JSX into regular JavaScript `React.createElement(...)` calls.

### Core Rules of JSX:
1. **Return a single root element**: Wrap multiple adjacent tags in a parent tag or a **Fragment** (`<>...</>`) to avoid unnecessary DOM wrapper nodes.
2. **HTML vs JSX Attributes**:
   - `class` $\rightarrow$ `className`
   - `for` $\rightarrow$ `htmlFor`
   - `onclick` $\rightarrow$ `onClick` (camelCase event handlers)
3. **JavaScript Expressions in `{}`**: Any valid JS expression (variables, function calls, arithmetic) goes inside curly braces:
   ```jsx
   <p>Price: ${price * 0.9}</p>
   ```
4. **Self-closing tags**: Tags without children must close with a forward slash: `<img src="..." />`, `<input type="text" />`.

---

## 4. React Strict Mode
`<StrictMode>` is a development-only tool for highlighting potential problems in an application.

```jsx
<StrictMode>
  <App />
</StrictMode>
```

### Why does it render components twice?
* **Development Only**: In production builds, StrictMode is inactive and does **not** double render.
* **Catches Side Effects**: Ensures your render function is a **pure function** (same input always produces the same output without mutating external variables).
* **Validates Cleanup**: Mounts $\rightarrow$ Unmounts $\rightarrow$ Re-mounts to verify that cleanups in `useEffect` (timers, event listeners, subscriptions) prevent memory leaks.

---

## 5. Props (Properties)
Props are used to pass data from a parent component down to a child component.

* Props are **read-only (immutable)**: A component must never modify its own props.
* Data flows in a **unidirectional (top-to-bottom)** stream.

```jsx
// Parent
<Product title="Laptop" price={80000} />

// Child
export default function Product(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>₹{props.price}</p>
        </div>
    );
}
```

---

## 6. Destructuring Props
Instead of typing `props.` repeatedly, JavaScript object destructuring allows you to unpack properties directly in the function parameter:

```jsx
export default function Product({ title, price, features = [] }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>₹{price}</p>
        </div>
    );
}
```
* **Default Values**: You can provide default values directly (e.g., `price = 0`).

---

## 7. Rendering Lists with `map()`
In React, the standard way to render collections of data is using the array method `map()`.

```jsx
const features = ["8 GB RAM", "128 GB Storage", "5G Enabled"];

return (
    <ul>
        {features.map((feature, index) => (
            <li key={index}>{feature}</li>
        ))}
    </ul>
);
```

### Why `map()` and not `forEach()`?
* `map()` returns a **new array of JSX elements** that React can render directly into the DOM.
* `forEach()` returns `undefined`, which produces nothing on screen.

### The `key` Prop:
* Always provide a unique `key` prop to elements created in a loop.
* Helps React identify which items have changed, been added, or removed, boosting rendering performance.

---

## 8. Conditional Rendering & Styling

### A. Conditional Rendering
* **Logical AND (`&&`)**: Renders content only if the condition is true:
  ```jsx
  {price > 30000 && <p className="discount">Discount of 5% Available!</p>}
  ```
* **Ternary Operator (`? :`)**:
  ```jsx
  <p>{isDiscount ? "Discounted Price" : "Standard Price"}</p>
  ```

### B. Dynamic Inline Styles
Styles in JSX are written as JavaScript objects with camelCase keys:

```jsx
let isDiscount = price > 30000;
let cardStyle = {
    backgroundColor: isDiscount ? "#e2f0d9" : "#ffffff",
    borderRadius: "0.75rem",
    padding: "1rem"
};

return <div style={cardStyle}>...</div>;
```

---

## 9. Multi-Dimensional Data (2D Arrays)
When working with grid data or multi-line product details, 2D arrays can be used to organize specifications:

```jsx
// Array definition:
let description = [
    ["Men's running shoes", "20% off"],   // Product 0
    ["Women's running shoes", "10% off"], // Product 1
    ["Men's casual shoes", "15% off"]     // Product 2
];

// Accessing:
description[0][0] // "Men's running shoes"
description[0][1] // "20% off"
```
Passing an `idx` prop to the child component enables dynamic lookup:
```jsx
<p>{description[props.idx][0]}</p>
<p>{description[props.idx][1]}</p>
```