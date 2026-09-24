function onsubmit(event) {
    console.log(event);
    event.preventDefault();
    console.log(" FORM SUBMITTED ");
}

export default function Form() {
    return (
        <>
            <form onSubmit={onsubmit}>
                <input type="text" placeholder="WRITE SOMETHING" />
                <button type="submit">SUBMIT</button>
            </form>
        </>
    );
}