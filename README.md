# React Learning Notes & Concepts ⚛️

A comprehensive reference for foundational React concepts, core rules, architecture, and hands-on code examples.

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
10. [Event Handling & Synthetic Events](#10-event-handling--synthetic-events)
11. [The 3 Pillars of React](#11-the-3-pillars-of-react)
12. [State in React](#12-state-in-react)
13. [React Hooks Overview & Rules](#13-react-hooks-overview--rules)
14. [The `useState` Hook In-Depth](#14-the-usestate-hook-in-depth)
15. [State Updater Functions & Closures](#15-state-updater-functions--closures)
16. [Lazy Initial State (Performance Optimization)](#16-lazy-initial-state-performance-optimization)

---

## 1. Introduction to React
* **What is React?**: An open-source JavaScript library developed by Meta for building fast, interactive user interfaces (especially Single Page Applications - SPAs).
* **Library vs Framework**: React is a library focused primarily on the View layer (`V` in MVC).
* **Virtual DOM**: React creates a lightweight virtual representation of the actual DOM in memory, calculates minimal differences (reconciliation / diffing), and batches updates efficiently.

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
* Component names **MUST ALWAYS start with a capital letter** (e.g., `Product`, `HelloMsg`, `AmazonCard`, `LikeButton`).
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

---

## 10. Event Handling & Synthetic Events
Handling events with React elements is very similar to handling events on DOM elements, with some key syntactic differences:
1. React events are named using **camelCase** (`onClick`, `onMouseDown`, `onSubmit`) rather than lowercase (`onclick`).
2. With JSX you pass a **function reference** as the event handler rather than a string or immediate invocation.

### Passing Function References vs Function Invocations
```jsx
// ✅ Correct: passing function reference
<button onClick={handleClick}>Click Me</button>

// ❌ Incorrect: invokes function immediately during render!
<button onClick={handleClick()}>Click Me</button>
```

### The Synthetic Event Object
React wraps browser native events in a cross-browser instance called `SyntheticEvent`:
* It has the exact same interface as the browser's native event (including `stopPropagation()` and `preventDefault()`).
* Works identically across all browsers.

```jsx
function handleClick(event) {
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
}

export default function Button() {
    return <button onClick={handleClick}>Click Me</button>;
}
```

### Preventing Default Behavior (`event.preventDefault()`)
In pure HTML, returning `false` prevents default behavior (like form submission refreshing the page). In React, you must explicitly call `preventDefault()`:

```jsx
function handleSubmit(event) {
    event.preventDefault(); // Prevents full page reload
    console.log("Form submitted cleanly!");
}

export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write something..." />
            <button type="submit">Submit</button>
        </form>
    );
}
```

---

## 11. The 3 Pillars of React

React applications are built around three fundamental concepts:

| Pillar | Definition | Mutability | Scope |
| :--- | :--- | :--- | :--- |
| **Component** | Reusable UI building block containing markup & logic | Static structure | Defines the view |
| **Props** | Configuration data passed from parent to child | Read-Only (Immutable) | External / Passed down |
| **State** | Data that changes over time based on user interactions | Mutable (via Setter) | Internal / Private |

---

## 12. State in React
**State** is a built-in React object used to contain data or information about the component. A component's state can change over time; **whenever it changes, the component re-renders**.

### Why not regular JavaScript variables?
```jsx
// ❌ Regular variables do NOT trigger re-renders:
let count = 0;
function increment() {
    count++; // Variable changes, but React doesn't know, so UI never updates!
}
```
* Normal variables reset back to their initial value every time a component function executes.
* React's reconciliation engine has no way to track regular variable mutations.
* Using React state triggers the **Render Phase $\rightarrow$ Diffing $\rightarrow$ Commit Phase (DOM Update)**.

---

## 13. React Hooks Overview & Rules
Introduced in **React 16.8**, Hooks are functions that let you "hook into" React state and lifecycle features from function components.

### Core Rules of Hooks:
1. **Only Call Hooks at the Top Level**: Do not call Hooks inside loops, conditions, or nested functions. This ensures Hooks are called in the exact same order on every render.
2. **Only Call Hooks from React Functions**: Call them from React functional components or custom hooks, not regular JS functions.

React provides ~15 built-in hooks, the most essential being:
* `useState`: Local state management.
* `useEffect`: Handling side effects (API calls, subscriptions, timers).
* `useContext`: Consuming context values without prop drilling.
* `useRef`: Persisting values across renders without re-rendering, accessing DOM nodes directly.
* `useReducer`: Managing complex state logic.
* `useMemo` & `useCallback`: Performance optimization and memoization.

---

## 14. The `useState` Hook In-Depth
`useState` declares a state variable that retains its value between renders.

### Syntax:
```jsx
const [state, setState] = useState(initialValue);
```
* Uses **Array Destructuring**:
  * `state`: The current state snapshot.
  * `setState`: Setter function to update the state and schedule a re-render.

### Example: Like Button (Toggle Pattern)
```jsx
import { useState } from "react";

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    function handleClick() {
        setIsLiked(!isLiked);
    }

    return (
        <div>
            <h3>State in React</h3>
            <p onClick={handleClick} style={{ cursor: "pointer" }}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    );
}
```

---

## 15. State Updater Functions & Closures

### Asynchronous State Updates & Batching
State updates in React are **asynchronous** and **batched**. Calling a setter function does not immediately update the variable in the current running code.

### 1. Direct Assignment:
```jsx
setCount(count + 1);
```
Used when the new state does not depend on immediate successive state calculations.

### 2. Updater Callback Pattern:
```jsx
setCount((prevCount) => prevCount + 1);
```
**MUST be used when the next state depends on the previous state.**

### Why does this matter?
Consider calling `setCount` twice in the same handler:
```jsx
function incrementTwice() {
    // ❌ Fails to increment by 2:
    setCount(count + 1);
    setCount(count + 1);
    // Both calls read `count` from the current closure snapshot (e.g. 0).
    // Final result: count becomes 1, NOT 2!
}

function incrementTwiceCorrectly() {
    // ✅ Correct:
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // React queues each updater function and passes the updated value to the next.
    // Final result: count becomes 2!
}
```

### Closures in React:
A closure in JavaScript gives an inner function access to variables from its outer scope. Every render has its own props and state. Because event handlers capture the state of the render they were created in, using updater functions guarantees you always operate on the most up-to-date state.

---

## 16. Lazy Initial State (Performance Optimization)
If your initial state is the result of an expensive calculation (e.g. reading from local storage, generating random numbers, parsing large datasets):

```jsx
function computeInitialValue() {
    console.log("Expensive computation executed!");
    return Math.floor(Math.random() * 100) + 1;
}

// ❌ Inefficient:
const [count, setCount] = useState(computeInitialValue());
// computeInitialValue() runs on EVERY single render, even though React
// only uses its return value on the very first mount!

// ✅ Optimized (Lazy Initial State):
const [count, setCount] = useState(computeInitialValue);
// Pass only the function reference! React calls it ONLY ONCE on mount.
```