import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    return(
        <div className="Meaning">
        <h4>
           <em>{props.meaning.partOfSpeech}</em>
        </h4>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p>
                    {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                    </p>
                    </div>
            );
        })}
        </div>
    )
}