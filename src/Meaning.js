import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props){
    console.log(props);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return (
                  <div key={index}>
                      <p className="mt-3 mb-4">
                          <strong>Definition: </strong>
                          {definition.definition}
                      </p>
                      <em className="example">{definition.example}</em>
                      <Synonyms synonyms={definition.synonyms}/>
                  </div>
                )
            })}
        </div>
    )
}