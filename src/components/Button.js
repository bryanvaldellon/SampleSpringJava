import React from "react"

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCount = () =>{
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.addCount}>click me!!!</button>
                <p>counting = {this.state.count}</p>
            </div>
        )
    }

}

export default Button