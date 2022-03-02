import React from "react";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definitions, index){
                return (
                  <div key={index}>
                      <p>
                          {definitions.definition}
                      </p>
                      <br />
                      <p>{definitions.example}</p>
                  </div>
                )
            })}
        </div>
    )
}