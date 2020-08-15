import React from 'react';

export default class Club extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        console.log(this.props)
        return (
            <div 
                className="each-club"
                onClick={() => this.props.history.push(`/${this.props.club.name}`)}
            >
                <img src={this.props.club.image}/>
                <h4>{this.props.club.name}</h4>
            </div>
        )
    }
}