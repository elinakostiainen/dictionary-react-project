import React from "react";
import "./Phonetic.css"

export default function Phonetic(props){
    if (props.phonetic.audio)
    {
        return (
            <div className="Phonetic">
                <div className="audio">
                    <audio  src={props.phonetic.audio} controls>
                    </audio>
                </div>
                <div className="text">{props.phonetic.text}</div>
            </div>
        );
    } else {
        return (
            <div className="audio">
            <audio  src={props.phonetic.audio}>
            </audio>
            <div className="text">{props.phonetic.text}</div>
            </div>
        )
    }
}