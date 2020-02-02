import React from 'react';

class Result extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            result: 0,
        }
    }
    render(){
        return(
            <div className="result">
                <p className="result__text">The price is</p>
                <p className="result__number">{this.state.result}</p>
            </div>
        )
    }
}

export default Result