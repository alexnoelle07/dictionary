import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";


export default function Meaning(props) {
    return(
        <div className="Meaning">
        <h4>
           {props.meaning.partOfSpeech}
        </h4>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index} className="index">
                    <p>
                    <strong>Definition: </strong>{definition.definition}
                    <br />
                    <strong>Example: </strong>
                    <em>{definition.example}</em>
                    <br />
                    <Synonyms synonyms={definition.synonyms} />
                    
                    </p>
                    </div>
            );
        })}
        </div>
    )
}