import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKEyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse); 

        let pexelsApiKey = "4b3tb94of7a98bd19e0a989daf02046c";
        let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;

    axios.get(pexelsApiUrl).then(handlePexelsResponse);
    
    }
    function handleSubmit(event) {
        event.preventDefault(); 
        search();
    }
    
    function handleKeywordChange(event) {
        setKEyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
   if (loaded) {
    return(
        <div className="Dictionary">
            <section>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} placeholder="Search for a word" />
            </form>
            </section>
            <Results results={results} />
            <Photos photos={photos}/>
        </div>
    );
   } else{
       load();
   }
}