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
                onClick={() => this.props.history.push(`/${this.props.club.id}`)}
            >
                <img src={this.props.club.image_url}/>
                <h4>{this.props.club.club_name}</h4>
            </div>
        )
    }
}