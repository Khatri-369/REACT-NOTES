export default function Hellomsg({ msg, color }) {
    let styles = { color: color }
    return <h1 style={styles}>{msg}</h1>
}