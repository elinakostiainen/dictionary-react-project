import React from "react";
import "./Phonetic.css"

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <div className="audio">
                <audio  src={props.phonetic.audio} controls>
                </audio>
            </div>
            <div className="text mt-3">{props.phonetic.text}</div>
        </div>
    );
}