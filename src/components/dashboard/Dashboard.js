import React, { Component } from 'react';
// import Notifications from './Notifications';
import Character from '../characters/Characters';
import CreateCharacter from '../characters/CreateCharacter';
// import { Row, Col } from 'react-bootstrap';
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
                    {this.props.play ? <Character characters={characters} /> : <CreateCharacter /> }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.firestore.ordered.characters
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
       { collection: 'characters'} 
    ])
)(Dashboard);