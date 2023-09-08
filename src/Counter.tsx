import { Component, ReactNode } from 'react';
type CounterProps = {
    val: number
}





class Counter extends Component<CounterProps>{
    state = {
        counter: 0
    }
    constructor(props: CounterProps) {
        super(props);
        this.state.counter = this.props.val;
    }
    inc = () => {
        console.log("inc invoked");
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            console.log("this.state.counter", this.state.counter);
        });
        //this.state.counter++;
    }
    dec = () => {
        this.setState({
            counter: this.state.counter - 1
        }, () => {
            console.log("this.state.counter", this.state.counter);
        });
    }
    render(): ReactNode {
        return (
            <div>
                <h4>Counter:{this.state.counter}</h4>
                <p>This is a class component</p>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.dec}>Dec</button>
                </div>
            </div>
        )
    }

    componentDidMount(): void {
        console.log("Mounted");
    }
    componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("Updated");
    }
    componentWillUnmount(): void {
        console.log("i m unmounting");
    }
}
export default Counter;