import React from "react";
import Converter from '../converter/index.jsx'
import Result from '../result/index.jsx'
class ConvertApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            percentage: "",
            price: "",
            result: 0,
        }
        this.calculate = this.calculate.bind(this);
    }
    calculate(percentage, price,e, inputThis){
        e.preventDefault()
        var discount = (percentage / 100) * price;
        var result = price - discount;
        this.setState({
            percentage: "",
            price: "",
            result: result,
        })
        inputThis.inputHandler("percentage","");
        inputThis.inputHandler("price","");
    }
    render(){
        return(
            <div className="App">
                <header>
                    <a>
                        <img className="logo" srcSet="./img/logoBlack.svg" src="./img/logoBlack.png" width="27" height="22"></img>
                    </a>
                    <h1 className="title">Sales&Go</h1>
                </header>
                <Converter percentage={this.state.percentage} price={this.state.price} calculate={this.calculate} inputHandler={this.inputHandler} />
                <Result result={this.state.result} />
            </div>        
        )
    }
}

export default ConvertApp