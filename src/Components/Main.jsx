import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './Card'

function Main() {
    const [pokeData,setPokeData]= useState([]);
    const [loading,setLoading]= useState(true);
    const [url,setUrl]= useState("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    const [pokemonInfo, setPokemonInfo] = useState();

    const getAllPokemons = async () => {
        setLoading(true)
        const res = await axios.get(url);
        getPokemonObject(res.data.results)
        setLoading(false)
    }
    const getPokemonObject = async (res) => {
        res.map(async(item)=>{
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state
            })
        })
    }
    useEffect(() => {
        getAllPokemons()
    },[url])
    return (
        <>
        <div className="container">
            <div className="pokemon-container">
                <div className="all-container">
                <Card pokemon={pokeData} loading={loading} infoPokemon={pokemon => setPokemonInfo(pokemon)}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Main;