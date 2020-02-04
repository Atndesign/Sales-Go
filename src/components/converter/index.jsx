// Components/Converter
import React from "react";

class Converter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            percentage: "",
            price: "",
        }
    }
    inputHandler(key,value){
        this.setState({
            [key]: value
        });
    }
    render(){
        return(
            <form className="converter">
                <label className="converter__label" htmlFor="percentage">What does</label>
                <input value={this.state.percentage} className="converter__inputs" id="percentage" type="number" placeholder="Enter percentage..." onChange={e => this.inputHandler("percentage",e.target.value)}/>
                <label className="converter__label" htmlFor="price">of</label>
                <input value={this.state.price} className="converter__inputs" id="price" type="number" placeholder="Enter the price... " onChange={e => this.inputHandler("price",e.target.value)}/>
                <button className="converter__btn" onClick={e => this.props.calculate(this.state.percentage, this.state.price, e, this)}>Calculate</button>
            </form>
        )
    }
}

export default Converter