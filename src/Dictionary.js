import React, {useState} from "react"

export default function Dictionary(){
let [searchWord, setSearchWord] = useState("");

function search(event){
    event.preventDefault();
    alert(`Searching for ${searchWord}`);
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
        </div>
    )
}