// Components/Converter
import React from "react";

class Converter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form className="calculation">
                <label className="calculation__label" htmlFor="percentage">What does</label>
                <input className="calculation__inputs" id="percentage" type="number"/>
                <label className="calculation__label" htmlFor="price">of</label>
                <input className="calculation__inputs" id="price" type="number"/>
                <button className="calculation__btn">Calculate</button>
            </form>
        )
    }
}

export default Converter