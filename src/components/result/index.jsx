import React from 'react';

class Result extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="result">
                <p className="result__text">The price is</p>
                <p className="result__number">{this.props.result}</p>
            </div>
        )
    }
}

export default Result