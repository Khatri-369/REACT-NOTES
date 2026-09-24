function click(event) {
    console.log(event);
}

export default function Button() {
    return (
        <>
            <button onMouseDown={click}>CLICK ME</button>
            <p onMouseDown={click}> CLICK ME</p>
        </>
    );
}   