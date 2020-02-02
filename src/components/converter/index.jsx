// Components/Converter
import React from "react";

class Converter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form className="converter">
                <label className="converter__label" htmlFor="percentage">What does</label>
                <input className="converter__inputs" id="percentage" type="number" placeholder="Enter percentage"/>
                <label className="converter__label" htmlFor="price">of</label>
                <input className="converter__inputs" id="price" type="number" placeholder="Enter the price"/>
                <button className="converter__btn">Calculate</button>
            </form>
        )
    }
}

export default Converter