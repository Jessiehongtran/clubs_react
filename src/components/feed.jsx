import React from 'react';
import '../styles/feed.scss'

export default class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feeds: [],
            text: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            feeds: [
                ...this.state.feeds,
                this.state.text
            ]
        })
    }

    render(){
        const {feeds} = this.state;

        return (
            <div className="feed">
                <textarea rows="10" cols="1"
                    placeholder="What's up?" 
                    onChange={this.handleChange}
                />
                <div className="btn">
                    <button
                        onClick={this.handleSubmit}
                    >pop
                    </button>
                </div>
                {feeds.map(feed => 
                    <div className="each-feed">
                        <p>{feed}</p>
                    </div>
                )}
            </div>
        )
    }
}