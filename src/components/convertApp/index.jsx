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
    
    calculate(percentage, price,e){
        e.preventDefault()
        var result = (percentage / 100) * price;
        this.setState({
            percentage: 0,
            price: 0,
            result: result,
        })
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
                <Converter percentage={this.state.percentage} price={this.state.price} calculate={this.calculate} />
                <Result result={this.state.result} />
            </div>        
        )
    }
}

export default ConvertApp