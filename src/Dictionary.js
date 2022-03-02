import React, {useState} from "react"
import axios from "axios"
import Results from "./Results"
import "./Dictionary.css"

export default function Dictionary(){
let [searchWord, setSearchWord] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

function search(event){
    event.preventDefault();

// documentation url = https://dictionaryapi.dev/
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`

    axios.get(apiUrl).then(handleResponse)
}

function handleSearchWordChange(event){
    event.preventDefault();
    setSearchWord(event.target.value);
}

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Search for a word" autoFocus={true} onChange={handleSearchWordChange}/>
            </form>
            <Results results={results}/>
        </div>
    )
}