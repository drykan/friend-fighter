import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CreateCharacter from '../characters/CreateCharacter';
import BuildCharacter from './BuildCharacters';

const Character = ({characters}) => {
    return (
        <div id="gameboard">
            <CreateCharacter />
            <hr />
            <div className="character-list">
                { characters && characters.map(character => {
                    return (
                        <BuildCharacter character={character} key={character.id} />
                    )
                })}
            </div>
        </div>
    )
};

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
)(Character);