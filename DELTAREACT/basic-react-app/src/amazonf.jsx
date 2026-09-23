import Amazoncard from "./amazoncard";

function Navbar({ style }) {
    return (
        <h3 style={style}>BLOCKBUSTER DEALS ON COMPUTER ACCESSORIES | SHOP NOW</h3>
    )
}

export default function Amazonf() {
    let style = {
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
    }
    let cardstyle = {
        backgroundColor: "#c7c7c7",
        color: "#111",
        borderRadius: "1rem",
        padding: "1rem",
        border: "2px solid #111",
        width: "15rem",
        textAlign: "center",
    }
    return (
        <div style={{ backgroundColor: "#ff9f00" }}>
            <Navbar
                style={{
                    color: "#111",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "#ff9f00",
                    padding: "1rem",
                    fontSize: "2rem"
                }}
            />
            <div style={style}>
                <div className="amazoncard1" style={cardstyle}>
                    <Amazoncard productname="ADIDAS" desc="Men's running shoes" extradesc="20% off" oldprice="1000" newprice="800" />
                </div>
                <div className="amazoncard2" style={cardstyle}>
                    <Amazoncard productname="puma" desc="Women's running shoes" extradesc="10% off" oldprice="900" newprice="810" />
                </div>
                <div className="amazoncard3" style={cardstyle}>
                    <Amazoncard productname="nike" desc="Men's running shoes" extradesc="15% off" oldprice="1100" newprice="935" />
                </div>
                <div className="amazoncard4" style={cardstyle}>
                    <Amazoncard productname="reebok" desc="Women's running shoes" extradesc="25% off" oldprice="800" newprice="600" />
                </div>
            </div>
        </div>
    );
}