import React from 'react';
import '../styles/feed.scss';
import { API_URL } from '../config';
import Axios from 'axios';

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

    getComments(){
        const clubId = parseInt(this.props.props.match.params.clubName)
        Axios.get(`${API_URL}/comments/club/${clubId}`)
             .then(res => {
                 console.log(res.data)
                 this.setState({feeds: res.data})
             })
             .catch(err => {
                 console.log(err)
             })
    }

    componentDidMount(){
        this.getComments()
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const clubId = parseInt(this.props.props.match.params.clubName)
        Axios.post(`${API_URL}/comments/club/${clubId}`, {comment: this.state.text})
            .then(res => {
                console.log(res.data)
                this.getComments()
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        const {feeds} = this.state;
        const name = localStorage.getItem('name')|| ""

        return (
            <div className="feed">
                <textarea rows="10" cols="1"
                    placeholder={"What's up," + name + "?"}
                    onChange={this.handleChange}
                />
                <div className="btn">
                    <button
                        onClick={this.handleSubmit}
                    >pop
                    </button>
                </div>
                {this.state.feeds.map(feed => 
                    <div className="each-feed">
                        <p className="text">{feed.comment}</p>
                    </div>
                )}
            </div>
        )
    }
}