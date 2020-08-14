import React from 'react';

export default class Club extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="each-club">
                <img src={this.props.club.image}/>
                <h4>{this.props.club.name}</h4>
            </div>
        )
    }
}