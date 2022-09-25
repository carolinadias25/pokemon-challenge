import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Main =()=>{
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');

    const pokemonFunction=async()=>{
        setLoading(true)
        const res = await axios.get(url);
        // console.log(res.data)
        setLoading(false)
    }
    useEffect(() => {
        pokemonFunction()
    },[url])
    return (
        <>
            <div>
                It renders!
            </div>
        </>
    )
}
export default Main;