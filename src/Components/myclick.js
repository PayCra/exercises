export default function handleClick() {
    if (this.state.color === "") {
        this.setState({color: "darker"})
    } else {
        this.setState({color: ""})
    }
}
