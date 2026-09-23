export default function Amazoncard(props) {
    let pricecolor = {
        backgroundColor: "#111",
        color: "#fff",
        padding: "0.5rem",
        borderRadius: "0.5rem",
    }
    let buttonstyle = {
        backgroundColor: "#111",
        color: "#fff",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        border: "none",
        cursor: "pointer",
        width: "10rem",
        textAlign: "center",
    }
    let brandstyle = {
        fontSize: "2rem",
        fontWeight: "bold",
    }
    let descstyle = {
        fontSize: "1.5rem",
        fontWeight: "normal",
    }
    let extradescstyle = {
        fontSize: "1.5rem",
        fontWeight: "normal",
    }
    let pricestyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
    }
    let buynowstyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
    }
    return (
        <>
            <div className="card">
                <p style={brandstyle}>{props.productname}</p>
                <p style={descstyle}>{props.desc}</p>
                <p style={extradescstyle}>{props.extradesc}</p>
                <p style={pricestyle}><s>{props.oldprice}</s><span style={pricecolor}>{props.newprice}</span></p>
                <button style={buynowstyle}>buy now</button>
            </div>
        </>
    );
}