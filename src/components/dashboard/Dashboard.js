import React, { Component } from 'react';
// import Notifications from './Notifications';
import Character from '../characters/Characters';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { characters } = this.props;
        return (
            <div className="dashboard container">
                <div className="game-board">
                    <Character characters={characters} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.firestore.ordered.characters,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
       { collection: 'characters'} 
    ])
)(Dashboard);