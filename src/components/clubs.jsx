import React from 'react';
import { clubs } from '../data/clubs';
import Club from './club';
import '../styles/clubs.scss';

export default class Clubs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clubs: clubs
        }
    }

    render(){
        return (
            <>
                <h1>Find your tribe</h1>
                <div className="clubs">
                    {clubs.map(club => <Club club={club}/>)}
                </div>
            </>
        )
    }
}