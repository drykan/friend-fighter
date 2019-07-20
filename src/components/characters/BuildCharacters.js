import React from 'react'
import { connect } from 'react-redux';
import { createCharacter } from '../../store/actions/characterActions';

import Card from 'react-bootstrap/Card';

const BuildCharacter = ({character}) => {
    return (
        <Card className="character-card">
            <Card.Title>{character.title}</Card.Title>
            <Card.Img variant="top" src={character.imgURL} />
            <Card.Body>
                <Card.Text>
                    {character.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCharacter: (character) => dispatch(createCharacter(character))
    };
};

export default connect(null, mapDispatchToProps)(BuildCharacter);
