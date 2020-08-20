import React from 'react';
import { clubs } from '../data/clubs';
import Club from './club';
import '../styles/clubs.scss';
import Axios from 'axios';
import { API_URL } from '../config';

export default class Clubs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clubs: []
        }
    }

    componentDidMount(){
        Axios.get(`${API_URL}/clubs`)
             .then(res => {
                 console.log(res.data)
                 this.setState({clubs: res.data})
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render(){
        return (
            <>
                <h1
                    style={{fontFamily: "Courier New, Courier, monospace"}}
                >Find your tribe</h1>
                <div className="clubs">
                    {this.state.clubs.map(club => <Club club={club} history={this.props.props.history}/>)}
                </div>
            </>
        )
    }
}