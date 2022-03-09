import React from "react";

export default function Synonyms (props){
    if (props.synonyms){
                return (
                    <ul className="Synonyms">
                        {props.synonyms.map(function(synonym, index){
                            return <il key={index}>{synonym}</il>;
                        })}
                    </ul>
                );
            } else {
                return null;
            }
        }