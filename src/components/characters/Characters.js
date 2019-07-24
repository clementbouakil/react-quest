import React, { Component } from "react";
import axios  from "axios";

import "./Characters.css";

import DisplayCharacter from "../DisplayCharacter/DisplayCharacter";

class Characters extends Component {

    state = {
        characters: [],
        isLoaded: false
    }
    
    //  * fetch
    // getCharacters = () => {
    //     fetch("https://melroune.github.io/starwars-api/api/all.json")
    //     .then(res => res.json())
    //     .then(res => this.setState({characters: res, isLoaded: true }))
    // }

    // * axios classique
    // getCharacters = () => {
    //     axios.get("https://melroune.github.io/starwars-api/api/all.json")
    //     .then(res => this.setState({characters: res.data, isLoaded: true }));
    // }

    // * async await
    getCharacters = async () => {
        const result = await axios.get(
            "https://melroune.github.io/starwars-api/api/all.json"
        );
        this.setState({ characters: result.data, isLoaded: true});
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