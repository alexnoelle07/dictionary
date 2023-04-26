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

        let pexelsApiKey = "gpvlMXNkQqpXeRI0WQx2bT8cYvtHmYGbIyowjx8c3iYS9DtP7CKjMCos";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization : `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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