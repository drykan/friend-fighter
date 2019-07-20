import React from 'react';
import BuildCharacter from './BuildCharacters';

const Character = ({characters}) => {
    return (
        <div className="character-list">
            { characters && characters.map(character => {
                return (
                    <BuildCharacter character={character} key={character.id} />
                )
            })}
        </div>
    )
};

export default Character;