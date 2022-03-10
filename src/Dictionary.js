import React, {useState} from "react"
import axios from "axios"
import Results from "./Results"
import "./Dictionary.css"

export default function Dictionary(props){
let [searchWord, setSearchWord] = useState(props.defaultWord);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState (false);

function handleResponse(response){
    setResults(response.data[0]);
}

function search(){
// documentation url = https://dictionaryapi.dev/
let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`

axios.get(apiUrl).then(handleResponse)
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleSearchWordChange(event){
    event.preventDefault();
    setSearchWord(event.target.value);
}

function load (){
    setLoaded(true);
    search();
}

if (loaded)
{
    return(
        <div className="Dictionary">
            <h1>Welcome to the Dictionary</h1>
            <h2>What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Search for a word" autoFocus={true} onChange={handleSearchWordChange} defaultValue={props.defaultWord}/>
            </form>
            <Results results={results}/>
        </div>
    )
} else {
load();
return "loading..."
}
}