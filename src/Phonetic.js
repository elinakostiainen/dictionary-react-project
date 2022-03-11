import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetic.css"

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <div className="audio">
            <ReactAudioPlayer src={props.phonetic.audio} controls />
            </div>
            <div className="text">{props.phonetic.text}</div>
        </div>
    );
}