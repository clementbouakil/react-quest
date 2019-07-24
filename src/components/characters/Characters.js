import React, { Component } from "react";

import "./Characters.css";

import DisplayCharacter from "../DisplayCharacter/DisplayCharacter";

class Characters extends Component {

    state = {
        characters: [],
        isLoaded: false
    }

    getCharacters = () => {
        fetch("https://melroune.github.io/starwars-api/api/all.json")
        .then(res => res.json())
        .then(res => this.setState({characters: res, isLoaded: true }))
    }

    componentDidMount() {
        this.getCharacters();
    }

    render() {
        const {characters, isLoaded} = this.state;
        return (
            <>
            {!isLoaded ? <div>Loading...</div> : 

                <div>
                    {characters.map(character => (
                        <DisplayCharacter character={character} key={character.id}/>
                    ))}
                </div>
            }
            </>
        );
    }
}

export default Characters;